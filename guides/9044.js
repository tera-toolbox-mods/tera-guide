let player, entity, library, effect, handlers_reference;
// Bahaar



// fire at edge

let entities_gameId_at_edge = [];
let fire_at_edge = 0;

function reset_fire_at_edge(handlers) {
    despawn_entities_at_edge(handlers);
    fire_at_edge = 0;
}

function despawn_entities_at_edge(handlers) {
    for(const gameId of entities_gameId_at_edge) {
        handlers['despawn']({
            id: gameId
        });
    }

    entities_gameId_at_edge = [];
}

function fire_at_edge_event(hp, handlers, event, ent, dispatch) {
    const default_alive_time = 60 * 60 * 1000; // 60 min
    const amount_of_entities = 50;

    switch(hp) {
        case 30: {
            if(fire_at_edge >= 3) break;

            despawn_entities_at_edge(handlers);
            fire_at_edge = 3;

            entities_gameId_at_edge.push(...handlers['lib']['create_entities_in_circle'](handlers, {
                id: 553,
                sub_delay: default_alive_time
            }, amount_of_entities, { x: -115237, y: 115071, z: 4022 }, 800));
            break;
        }
        case 60: {
            if(fire_at_edge >= 2) break;

            despawn_entities_at_edge(handlers);
            fire_at_edge = 2;

            entities_gameId_at_edge.push(...handlers['lib']['create_entities_in_circle'](handlers, {
                id: 553,
                sub_delay: default_alive_time
            }, amount_of_entities, { x: -115237, y: 115071, z: 4022 }, 900));
            break;
        }
        case 97: {
            if(fire_at_edge >= 1) break;

            despawn_entities_at_edge(handlers);
            fire_at_edge = 1;

            entities_gameId_at_edge.push(...handlers['lib']['create_entities_in_circle'](handlers, {
                id: 553,
                sub_delay: default_alive_time
            }, amount_of_entities, { x: -115237, y: 115071, z: 4022 }, 1090));
            break;
        }
    }
}

module.exports = {
    load(dispatch) {
        ({ player, entity, library, effect } = dispatch.require.library);
        fire_at_edge = 0;


        // flame
        dispatch.hook('S_ACTION_STAGE', 9, e=> {
            if(e.templateId === 2100 && e.skill.huntingZoneId === 444) return false;
        });
    },
    
    // flame
    "h-444-2000-99": [
        {
            "type": "func",
            "func": reset_fire_at_edge
        }
    ],

    "h-444-2000-97": [
        {
            "type": "func",
            "func": fire_at_edge_event.bind(null, 97)
        }
    ],

    "h-444-2000-60": [
        {
            "type": "func",
            "func": fire_at_edge_event.bind(null, 60)
        }
    ],

    "h-444-2000-30": [
        {
            "type": "func",
            "func": fire_at_edge_event.bind(null, 30)
        }
    ],

};