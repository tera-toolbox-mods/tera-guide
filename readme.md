# Tera-Guide

Is a module for creating dungeon guides extremely easily by simple "scripting".

## Dependencies
https://github.com/Kaseaa/library

The say node library used for text-to-speech(works without it, so not needed). Install it by running "`npm install say`" in your proxy folder.

## Commands
Note: All commands starts with "guide"

Command | Usage | Arguments
--- | --- | ---
x | Toggles the guide module | x
debug | Toggles debug mode | debug(enables everything), hp, abnormal, skill, boss

## Supported
Feel free to create your own guide/add-on and send a pull-request :=)

Dungeon | How much is it scripted
--- | ---
AAHM | Last boss
HH P4 | Firewalls
RMHM | Debuff mechanic on first boss


## How to create a guide
First enable debug setting in config.json, then go into the dungeon you wish to create a guide for.
Once you've entered look in console for the id. Once you have the id create a file under the guides folder.
The file should start with the number followed by ".json"(or ".js" if you know what you're doing)

So, now to create actions have debug option on and log the attacks/abnormalities then script what you want to happen during those attacks. Please refer below to options(things you can trigger upon the abnormality or attack).

### Naming keys
Prefix a means handle a abnormality. However in addition to this there are subtypes to abnormalities.

Sub type | Effect
--- | ---
m | The abnormality was applied by a mob to you. (m = mob)
e | The abnormality was applied by "nothing"/server to you. (e = empty)
b | The abnormality was applied to the bam. (b = bam)

Prefix s means handle a skill.

Prefix h means health. For instance "h-huntingZoneId-templateId-60", means it'll trigger on 60%

When creating an entry use a prefix, followed by "-huntingZoneId-templateId-" after the last "-" put the abnormality id, skill id or hp %.

### Options
Key | Required | Values | Usage
--- | --- | --- | ---
type | Yes | spawn, text, sound, stop_timer, func | Determines what action(s) will be taken when the event is called
sub_type | Yes(text), No | notification(text), message(text), speech(text) | Used in conjunction with certain types.
id | Yes(spawn, sound, stop_timer), No | A unique identifier not used "anywhere" else in the file. | It's used for spawning item(the item id), stopping a notification/text in progress and id of a sound. **DO NOT USE 0 FOR THE ID IN ANY CASE!**
delay | No | A delay in milliseconds | Creates a timer that can be used to delay ANY event.
sub_delay | Yes(spawn), No | How long in milliseconds before it acts upon it. | Used with spawning items
distance | Maybe(spawn), No | Distance in units(1meter = 25 units) | Used when spawning something. (How far away it'll be spawned from the boss)
offset | Maybe(spawn), No | [-PI, PI] | Used when spawning something. (How it will be spawned in relation to the boss) **use this or pos**
pos | Maybe(spawn), No | {x, y, z} | Used when spawning something. (The location on the map) **use this or offset**
message | Yes(text), No | The text you wish to display when it gets triggered | Use with type text
func | Yes(func), No | A function which should get called when an entry is called. | The callback will get passed the text_handler function, the event it was called from and what entity information that triggered the event