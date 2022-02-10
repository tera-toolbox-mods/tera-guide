let okayuDebuff = 0; // 0 same, 1 opposite
let koroneColor = 0; // 0 fire, 1 ice 


const hololiveIsCute = (num) => () => {
    okayuDebuff = num;
}

const watchingHololiveAllDay = (num) => () => {
    koroneColor = num;
}

const OkaKoro = num3 => (handlers) => {
    if (num3 == 1) {
        if ((okayuDebuff + koroneColor) % 2 == 0) {
            handlers["text"]({
                "sub_type": "notification",
                "message": "In "
            });
        }
        else if ((okayuDebuff + koroneColor) % 2 == 1) {
            handlers["text"]({
                "sub_type": "notification",
                "message": "Out "
            });
        }
    }
    else if (num3 == 0) {
        if ((okayuDebuff + koroneColor) % 2 == 0) {
            handlers["text"]({
                "sub_type": "notification",
                "message": "Out "
            });
        }
        else if ((okayuDebuff + koroneColor) % 2 == 1) {
            handlers["text"]({
                "sub_type": "notification",
                "message": "In"
            });
        }
    }
}


module.exports = {

    "qb-3026-1000-3026005": [{ type: "func", func: hololiveIsCute(0) },
    { "type": "text", "sub_type": "notification", "message": "Same Color" }], // same color
    "qb-3026-1000-3026004": [{ type: "func", func: hololiveIsCute(1) },
    { "type": "text", "sub_type": "notification", "message": "Opposite Color" }], // opposite color
    "qb-3026-1000-3026005": [{ type: "func", func: hololiveIsCute(0) },
    { "type": "text", "sub_type": "notification", "message": "Same Color" }], // same color
    "qb-3026-1000-3026004": [{ type: "func", func: hololiveIsCute(1) },
    { "type": "text", "sub_type": "notification", "message": "Opposite Color" }], // opposite color


    "am-3026-1000-30260001": [{ type: "func", func: watchingHololiveAllDay(0) }], // fire
    "am-3026-1000-30260002": [{ type: "func", func: watchingHololiveAllDay(1) }], // ice
    "am-3026-1000-30260001": [{ type: "func", func: watchingHololiveAllDay(0) }], // fire
    "am-3026-1000-30260002": [{ type: "func", func: watchingHololiveAllDay(1) }], // ice


    "s-3026-1000-1212-0": [{ type: "func", func: OkaKoro(1) },
    { "type": "text", "sub_type": "notification", "message": "Fire In" }], // ice inside
    "s-3026-1000-1215-0": [{ type: "func", func: OkaKoro(1) },
    { "type": "text", "sub_type": "notification", "message": "Fire In" }], // ice inside
    "s-3026-1000-1213-0": [{ type: "func", func: OkaKoro(0) },
    { "type": "text", "sub_type": "notification", "message": "Ice In" }], // fire inside
    "s-3026-1000-1214-0": [{ type: "func", func: OkaKoro(0) },
    { "type": "text", "sub_type": "notification", "message": "Ice In4" }], // fire inside

    "s-3026-1000-2212-0": [{ type: "func", func: OkaKoro(1) },
    { "type": "text", "sub_type": "notification", "message": "Fire In5" }], // ice inside
    "s-3026-1000-2215-0": [{ type: "func", func: OkaKoro(1) },
    { "type": "text", "sub_type": "notification", "message": "Fire In6" }], // ice inside
    "s-3026-1000-2213-0": [{ type: "func", func: OkaKoro(0) },
    { "type": "text", "sub_type": "notification", "message": "Ice In7" }], // fire inside 
    "s-3026-1000-2214-0": [{ type: "func", func: OkaKoro(0) },
    { "type": "text", "sub_type": "notification", "message": "Ice In8" }], // fire inside 

    "s-3026-1000-2141-0": [{ type: "func", func: OkaKoro(1) }], // ice inside
    "s-3026-1000-2142-0": [{ type: "func", func: OkaKoro(1) }], // ice inside
    "s-3026-1000-2144-0": [{ type: "func", func: OkaKoro(0) }], // fire inside 
    "s-3026-1000-2143-0": [{ type: "func", func: OkaKoro(0) }], // fire inside 










    /*
    "s-3026-1000-1212-0": [{ "type": "text", "sub_type": "notification", "message": "Fire In" }], // ice inside
    "s-3026-1000-1215-0": [{ "type": "text", "sub_type": "notification", "message": "Fire In" }], // ice inside
    "s-3026-1000-1213-0": [{ "type": "text", "sub_type": "notification", "message": "Ice In" }], // fire inside
    "s-3026-1000-1214-0": [{ "type": "text", "sub_type": "notification", "message": "Ice In" }], // fire inside


    "s-3026-1000-2212-0": [{ "type": "text", "sub_type": "notification", "message":"Fire In" }], // ice inside
    "s-3026-1000-2215-0": [{ "type": "text", "sub_type": "notification", "message":"Fire In" }], // ice inside
    "s-3026-1000-2213-0": [{ "type": "text", "sub_type": "notification", "message": "Ice In" }], // fire inside
    "s-3026-1000-2214-0": [{ "type": "text", "sub_type": "notification", "message":"Ice In" }], // fire inside
    */
    "s-3026-1000-1157-0": [{ "type": "text", "sub_type": "notification", "message": "Parasites Far" }],
    "s-3026-1000-2157-0": [{ "type": "text", "sub_type": "notification", "message": "Parasites Close" }],



};