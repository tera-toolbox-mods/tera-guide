import json
import os
from Crypto.Hash import SHA256
from multiprocessing.pool import ThreadPool as pool

DEF_SYNTAXES = [
    "dispatch.toServer",
    "dispatch.toClient",
    "dispatch.hook"
]

IGNORE_FILES = [
    'createManifest.py',
    'createManifest.exe',
    'manifest.json',
    'module.json'
]

NUMBER_OF_THREADS = 6
INDENTING = 4


def getFilePathsFor(path, excluded):
    """ Get all the files for a given filepath
    :param path: The parent directory
    :param excluded: An array of excluded file names
    :return: An array of filepaths
    """
    filePaths = []
    for dir, b, files in os.walk(path):
        if dir.count('.git') != 0: continue
        for file in files:
            if file not in excluded:
                filePaths.append((dir + '/' + file).replace('\\\\', '\\').replace('\\', '/'))
    return filePaths

def sha1(data):
    """ Get the SHA256 value of a byte string """
    s = SHA256.new()
    s.update(data)
    return s.hexdigest()

def getDefForSyntax(data, syntax):
    """ Gets the definition version and name using a given syntax
    :param data: the data to look for this information in
    :param syntax: for example "dispatch.toServer"
    :return: A dictionary with the key as the packet name and a list with the number
    """
    ret = {}
    syntaxLen = len(syntax)
    s = data.find(syntax)
    # While we can't find anymore
    while s != -1:
        s += syntaxLen + 1
        # We make sure it's an actual string and not a variable

        if data[s] in ['"', "'"]:
            s += 1
            e = data.find(data[s-1], s)
            # We have the packet name
            packetName = data[s:e]
            # While s isn't a number we increment it by 1
            while not data[s].isdigit(): s+= 1

            # Make sure we didn't pass a new line, a { or a ( to find that digit
            if s > data.find('\n', e) or s > data.find('{', e) or s > data.find('(', e): continue

            e = s
            # while e is a number we increment it by 1
            while data[e].isdigit(): e += 1
            # We have the def number -- assuming it's not more than one because of complexity reasons
            packetVersion = int(data[s:e])

            # Make sure we didn't pass a new line aswell as a { and a (
            if e > data.find('\n', s) or e > data.find('{', s) or e > data.find('(', s): continue

            # If the packet name already exist in our dict, we append it
            if ret.get(packetName, False): ret[packetName].append(packetVersion)
            else: ret[packetName] = [packetVersion]

        # Find the next occurrence
        s = data.find(syntax, s)

    return ret

def getDefsForFile(path):
    """ Get the definitions for a file path """
    defs = {}
    try:
        data = open(path, "r").read()
    except:
        return {}

    for syntax in DEF_SYNTAXES:
        # Get the defintions found using this syntax
        ret = getDefForSyntax(data, syntax)

        # Remove duplicates
        for key, value in ret.items():
            # If the key already exist in our defs variable add them together.
            if defs.get(key, False): defs[key] = defs[key] + value
            # If it didn't exist, create the entry
            else: defs[key] = value

    return defs

def getFinalDefs(oldDefs, newDefs):
    """ Combines old and new defs and returns it """
    # make sure we include all manually added defs
    for k, v in oldDefs.items():
        if newDefs.get(k, False) is False: newDefs[k] = v

        # merge old and new def
        newDefs[k] = list(set(newDefs[k] + oldDefs[k]))

    return newDefs

def createManifest(newData):
    oldManifest = {}

    # Load the old manifest
    try: oldManifest = json.loads(open('manifest.json', 'r').read())
    except: pass

    newManifest = { "files": newData.get('files', {}), "defs": getFinalDefs(oldManifest.get('defs', {}), newData.get('defs', {})) }
    for key, value in oldManifest.get('files', {}).items():
        # If the file isn't part of the new manifest ignore it
        if newManifest['files'].get(key, None) is None: continue

        # If it has settings we want to keep
        if isinstance(value, dict):
            value['hash'] = newManifest['files'][key]
            newManifest['files'][key] = value
        else: newManifest['files'][key] = newManifest['files'][key]

    # Write/create the new manifest
    open('manifest.json', 'w').write(json.dumps(newManifest, indent=INDENTING))


def getFileInfo(path):
    return {
        "hash": sha1(open(path, "rb").read()),
        "path": path,
        "defs": getDefsForFile(path)
    }


def main():
    with pool(NUMBER_OF_THREADS) as p:
        files = p.map(getFileInfo, getFilePathsFor('.', IGNORE_FILES))

    data = { "files": {}, "defs": {} }
    for file in files:
        # Get the hash value for the file path
        data['files'][file['path'][2:]] = file['hash']
        # Get the defs from the file
        for key, value in file['defs'].items():
            # If the packet already exists in our data[defs] append them, else create it
            if data['defs'].get(key, False): data['defs'][key] += value
            else: data['defs'][key] = value
            # To assure there are no duplicates we add it into a set, then back into a list
            data['defs'][key] = list(set(data['defs'][key]))

    createManifest(data)

if __name__ == '__main__':
    main()
