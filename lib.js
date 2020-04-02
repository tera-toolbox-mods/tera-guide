const HIGHLIGHT_ITEM_ID = 110684; // 88850 - Keen Bahaar's Mask; 98260 - Vergos's Head; 209904 - Skill Advancement Tome IV

//构建告示牌/高光   (1目标   2角度   3距离    4延迟  5持续时间 6光柱      7标签)
function SpawnMarker(target, angle, distance, delay, duration, highlight, label, handlers, event, entity) {
	if (!label)
		label = ["SAFE SPOT", "SAFE"];

	angle =  Math.PI * angle / 180;

	SpawnObject("object", target, 1, 0, 0,
		angle, distance,
		delay, duration,
		label,
		handlers, event, entity
	);

	if (highlight) {
		SpawnObject("item", target, HIGHLIGHT_ITEM_ID, 0, 0,
			angle, distance,
			delay, duration,
			null,
			handlers, event, entity
		);
	}
}

//构建标识物      (1物品 2角度  3距离     4延迟  5持续时间) 
function SpawnItem(item, angle, distance, delay, duration, handlers, event, entity) {
	angle =  Math.PI * angle / 180;

	SpawnObject("collection", false, item, 0, 0,
		angle, distance,
		delay, duration,
		null,
		handlers, event, entity
	);
}

//构建直线          (1物品  2偏角         3偏距         4角度   5长度  6延迟  7持续时间) 
function SpawnVector(item, offsetAngle, offsetDistance, angle, length, delay, duration, handlers, event, entity) {
	angle = angle * Math.PI / 180;

	for (let radius = 50; radius <= length; radius += 50) {
		SpawnObject("collection", false, item,
			offsetAngle, offsetDistance,
			angle, radius,
			delay, duration,
			null,
			handlers, event, entity
		);
	}
}

//构建圆             1目标   2物品    3偏角          4偏距      5间距     6半径   7延迟  8持续时间 
function SpawnCircle(target, item, offsetAngle, offsetDistance, interval, radius, delay, duration, handlers, event, entity) {
	for (let angle = -Math.PI; angle <= Math.PI; angle +=  Math.PI * interval / 180) {
		SpawnObject("collection", target, item,
			offsetAngle, offsetDistance,
			angle, radius,
			delay, duration,
			null,
			handlers, event, entity
		);
	}
}

//构建扇形             (1角 2角  3物品    4偏角         5偏距         6间距    7半径  8延迟  9持续时间) 
function SpawnSemicircle(d1, d2, item, offsetAngle, offsetDistance, interval, radius, delay, duration, handlers, event, entity) {
	let db, dg;

	if (d1 <= 180 && d2 <= 180) {
		db = -d1 / 180;
		dg = d2 / 180;
	} else if (d1 > 180 && d2 > 180) {
		db = -d1 / 180;
		dg = d2 / 180;
	} else {
		db = -d1 / 180;
		dg = d2 / 180;

		for (let angle = -Math.PI * db; angle <= Math.PI; angle +=  Math.PI * interval / 180) {
			SpawnObject("collection", false, item,
				offsetAngle, offsetDistance,
				angle, radius,
				delay, duration,
				null,
				handlers, event, entity
			);
		}

		for (let angle = Math.PI ; angle <= Math.PI * dg; angle +=  Math.PI * interval / 180) {
			SpawnObject("collection", false, item,
				offsetAngle, offsetDistance,
				angle, radius,
				delay, duration,
				null,
				handlers, event, entity
			);
		}

		return;
	}

	for (let angle = -Math.PI * db; angle <= Math.PI * dg; angle +=  Math.PI * interval / 180) {
		SpawnObject("collection", false, item,
			offsetAngle, offsetDistance,
			angle, radius,
			delay, duration,
			null,
			handlers, event, entity
		);
	}
}

//                 (1类型  2目标   3物品   4偏角         5偏距        6角度   7距离    8延迟  9持续时间 10标签)
function SpawnObject(type, target, item, offsetAngle, offsetDistance, angle, distance, delay, duration, label, handlers, event, entity) {

		let shield_loc;

		if (target && entity.dest !== undefined) {
			shield_loc = entity['dest'].clone();
		} else if (entity.loc !== undefined) {
			shield_loc = entity['loc'].clone();
		} else {
			return;
		}

		shield_loc.w = entity['loc'].w;

		applyDistance(shield_loc, offsetDistance, 360 - offsetAngle);

		switch (type) {
			// S_SPAWN_COLLECTION
			case "collection":
				handlers['spawn']({
					id: item,
			        delay: delay,						
					sub_delay: (duration + delay),
					distance: distance,
					offset: angle
				}, {
					loc: shield_loc
				});
				break;

			// S_SPAWN_DROPITEM
			case "item":
				handlers['spawn']({
					sub_type: "item",
					id: item,
			        delay: delay,						
					sub_delay: (duration + delay),
					distance: distance,
					offset: angle
				}, {
					loc: shield_loc
				});
				break;

			// S_SPAWN_BUILD_OBJECT
			case "object":
				handlers['spawn']({
					sub_type: "build_object",
					id: item,
			        delay: delay,						
					sub_delay: (duration + delay),
					distance: distance,
					offset: angle,
					ownerName: label[0],
					message: label[1]
				}, {
					loc: shield_loc
				});
				break;
		}

}

function applyDistance(loc, offsetDistance, offsetAngle) {
	let r = loc.w; //(loc.w / 0x8000) * Math.PI;
	let rads = (offsetAngle * Math.PI / 180);
	let finalrad = r - rads;

	loc.x += Math.cos(finalrad) * offsetDistance;
	loc.y += Math.sin(finalrad) * offsetDistance;

	return loc;
}

module.exports = {
	SpawnMarker,
	SpawnItem,
	SpawnVector,
	SpawnCircle,
	SpawnSemicircle,
	SpawnObject,
	applyDistance
};