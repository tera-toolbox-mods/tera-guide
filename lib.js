const {Vec3} = require('tera-data-parser').types;

const MARKER_ITEM_ID = 88850;

let global_gameId_tracker = 1;

//构建提示物品      1目标 2偏角 3偏距 4延迟 5持续时间 6标记 7告示牌文本
function SpawnMarker(target,degrees, radius, delay, times, marker, text, handlers, event, entity) {
	if (!text) text = ["SAFE SPOT", "SAFE"];
	if (!target) {
	let shield_loc   = entity['loc'].clone();	
	} else {
	let shield_loc   = entity['dest'].clone();			
	}
	    shield_loc.w = entity['loc'].w;

	let angle =  Math.PI * degrees / 180;

	handlers['spawn']({
		sub_type: "build_object",
		id: 1,
		delay: delay,
		sub_delay: times,
		distance: radius,
		offset: angle,
		ownerName: text[0],
		message: text[1]
	}, {
		loc: shield_loc
	});

	if (marker) {
		handlers['spawn']({
			sub_type: "item",
			id: MARKER_ITEM_ID,
			delay: delay,
			sub_delay: times,
			distance: radius,
			offset: angle
		}, {
			loc: shield_loc
		});
	}
}
//构建点 1标记物 2偏角 3偏距 4延迟 5持续时间
function SpawnItem(item, degrees, radius, delay, times, handlers, event, entity) {
	let shield_loc   = entity['loc'].clone();
	    shield_loc.w = entity['loc'].w;

	let angle =  Math.PI * degrees / 180;

	handlers['spawn']({
		id: item,
		delay: delay,
		sub_delay: times,
		distance: radius,
		offset: angle
	}, {
		loc: shield_loc
	});
}
//构建直线  1物品 2偏角 3偏距 4角度  5最远距离  6延迟 7持续时间
function SpawnVector(item, degree, distance, angles, maxRadius, delay, times, handlers, event, entity) {
	let shield_loc   = entity['loc'].clone();
	    shield_loc.w = entity['loc'].w;
	let degrees = 360 - degree;

	applyDistance(shield_loc, distance, degrees);

	let angle = angles * Math.PI / 180;

	for (let radius = 50; radius <= maxRadius; radius += 50) {
		handlers['spawn']({
			id: item,
			delay: delay,
			sub_delay: times,
			distance: radius,
			offset: angle
		}, {
			loc: shield_loc
		});
	}
}
//构建圆   1目标 2标记物 3偏角 4偏距 5间距 6半径 7延迟 8持续时间 
function SpawnCircle(target,item, degree, distance, intervalDegrees, radius, delay, times, handlers, event, entity) {
	if (!target) {
	let shield_loc   = entity['loc'].clone();	
	} else {
	let shield_loc   = entity['dest'].clone();			
	}
	
	shield_loc.w = entity['loc'].w;
	let degrees = 360 - degree;

	applyDistance(shield_loc, distance, degrees);

	for (let angle = -Math.PI; angle <= Math.PI; angle +=  Math.PI * intervalDegrees / 180) {
		handlers['spawn']({
			id: item,
			delay: delay,
			sub_delay: times,
			distance: radius,
			offset: angle
		}, {
			loc: shield_loc
		});
	}
}
//构建圆弧  1起始角度 2终止角度 3标记物 4偏角 5偏距 6间距 7半径 8延迟 9持续时间 
function SpawnSemicircle(d1, d2, item, degree, distance, intervalDegrees, radius, delay, times, handlers, event, entity) {
	let shield_loc   = entity['loc'].clone();
	    shield_loc.w = entity['loc'].w;
	let degrees = 360 - degree;
    let db = null
	let dg = null
	applyDistance(shield_loc, distance, degrees);
	
	if (d1<=180 && d2<=180) {
	 db = -d1/180
	 	dg = d2/180		
	} else if (d1>180 && d2>180){
	 	db = -d1/180
	 	dg = d2/180				
	} else{
	 	db = -d1/180		
	 	dg = d2/180			
	for (let angle = -Math.PI * db; angle <= Math.PI; angle +=  Math.PI * intervalDegrees / 180) {
		handlers['spawn']({
			id: item,
			delay: delay,
			sub_delay: times,
			distance: radius,
			offset: angle
		}, {
			loc: shield_loc
		});
	}		
	for (let angle = Math.PI ; angle <= Math.PI * dg; angle +=  Math.PI * intervalDegrees / 180) {
		handlers['spawn']({
			id: item,
			delay: delay,
			sub_delay: times,
			distance: radius,
			offset: angle
		}, {
			loc: shield_loc
		});
	 }
    return	 
	}
	
	for (let angle = -Math.PI * db; angle <= Math.PI * dg; angle +=  Math.PI * intervalDegrees / 180) {
		handlers['spawn']({
			id: item,
			delay: delay,
			sub_delay: times,
			distance: radius,
			offset: angle
		}, {
			loc: shield_loc
		});
	}
}

function applyDistance(loc, distance, degrees) {
	let r = loc.w; //(loc.w / 0x8000) * Math.PI;
	let rads = (degrees * Math.PI / 180);
	let finalrad = r - rads;

	loc.x += Math.cos(finalrad) * distance;
	loc.y += Math.sin(finalrad) * distance;

	return loc;
}

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
	SpawnMarker,
	SpawnItem,
	SpawnVector,
	SpawnCircle,
	SpawnSemicircle,
	applyDistance,
	create_entities_in_circle
};