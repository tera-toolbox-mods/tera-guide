const {Vec3} = require('tera-data-parser').types;

let global_gameId_tracker = 1;

/**
 * Create entities in a circle
 * @param {*} handlers handlers reference passed from main
 * @param {*} event_data parameteres for the data - see docs
 * @param {*} entity_count how many of the entity to spawn
 * @param {*} center where the center location is
 * @param {*} distance_from_center how far from center the entity should be spawned
 * 
 * Returns an array of all the gameIds used to spawn these entities
 */
function create_entities_in_circle(handlers, event_data, entity_count, center, distance_from_center) {
    center = new Vec3(center);
    let ret = [];

    for(let angle = -Math.PI; angle <= Math.PI; angle += (2 * Math.PI / entity_count)) {
        const gameId = global_gameId_tracker++;
        ret.push(gameId);

        handlers['spawn'](Object.assign(event_data, {
            offset: angle,
            distance: distance_from_center,
            force_gameId: gameId
        }), {
            loc: center
        });
    }

    return ret;
}

module.exports = {
    create_entities_in_circle
};