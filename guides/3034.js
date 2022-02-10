let number = 1;
let tellMechanic = false;
let previous = null;
let underSeventy = false;

const changeNumber = (num) => ()=> {
    number = num;
}

const getMessage = num => {
    switch(num) {
        case 0: return "wave";
        case 1: return "inner";
        case 2: return "outer";
    }
}

const startSexyMechanic = left => (handlers, _, ent) => {
    if(underSeventy) {
        handlers["text"]({
            "sub_type": "message",
            "message": number ? "in" : "out"
        });
    }

    const offset = 0.7
    const frontOffset = left ? offset : offset * -1;
    const backOffset = left ? 3.14 + offset : (3.14 + offset) * -1;
    const distance = 300;

    const event = {
        sub_delay: 3000,
        id: 530,
        offset: frontOffset,
        distance,
    };

    handlers["spawn"](event, ent);
    handlers["spawn"]({ ...event, offset: backOffset }, ent);
}

/**
 * 
 * @param {*} num 0 = wave, 1 = inner, 2 = outer
 */
const changeMechanic = num => (handlers)=> {

    if(tellMechanic) {
        const first = number ? getMessage(previous) : getMessage(num);
        const second = number ? getMessage(num) : getMessage(previous);

        handlers["text"]({
            "sub_type": "message",
            "message": `${first} -> ${second}`
        });
        tellMechanic = false;
    }

    previous = num;
}

module.exports = {
    "h-3034-3000-99": [{ type: "func", func: ()=> underSeventy = false }],
    "h-3034-3000-69": [{ type: "func", func: ()=> underSeventy = true }],

    "dm-0-0-3034311": [{ type: "func", func: changeNumber(1) }],
    "dm-0-0-3034312": [{ type: "func", func: changeNumber(0) }],
    "qb-3034-3000-3034300": [{ type: "func", func: ()=> tellMechanic = true }],
    "qb-3034-3000-3034301": [{ type: "func", func: changeMechanic(2) }],
    "qb-3034-3000-3034302": [{ type: "func", func: changeMechanic(1) }],
    "qb-3034-3000-3034303": [{ type: "func", func: changeMechanic(0) }],
    "dm-0-0-3034302": [{ type: "func", func: changeMechanic(2) }],
    "dm-0-0-3034303": [{ type: "func", func: changeMechanic(1) }],
    "dm-0-0-3034304": [{ type: "func", func: changeMechanic(0) }],

    "s-3034-3000-1116-0": [{ type: "func", func: startSexyMechanic(false) }],
    "s-3034-3000-2116-0": [{ type: "func", func: startSexyMechanic(false) }],
    "s-3034-3000-1119-0": [{ type: "func", func: startSexyMechanic(false) }],
    "s-3034-3000-2119-0": [{ type: "func", func: startSexyMechanic(false) }],

    "s-3034-3000-1117-0": [{ type: "func", func: startSexyMechanic(true) }],
    "s-3034-3000-2117-0": [{ type: "func", func: startSexyMechanic(true) }],
    "s-3034-3000-1118-0": [{ type: "func", func: startSexyMechanic(true) }],
    "s-3034-3000-2118-0": [{ type: "func", func: startSexyMechanic(true) }],
};