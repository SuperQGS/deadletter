var mailtruck = {
    location: "gas1",
    actions: 5,
}

const nodes = {
    "postoffice1": {
        "name": "Northern Post Office",
        "type": "postoffice",
        "coyotes": 0,
        links: ["postoffice1-gas1", "postoffice1-house1"],
        x: 200,
        y: 100,
        id: "postoffice1",
    },

    "gas1": {
        "name": "Dynaco Gas Station",
        "type": "gas",
        "coyotes": 0,
        links: ["postoffice1-gas1", "house5-gas1"],
        x: 300,
        y: 100,
        id: "gas1",
    },

    "postoffice2": {
        "name": "Southern Post Office",
        "type": "postoffice",
        "coyotes": 0,
        links: ["postoffice2-gas2", "postoffice2-store", "house2-postoffice2"],
        x: 200,
        y: 500,
        id: "postoffice2",
    },

    "gas2": {
        "name": "Quick Trip Gas Station",
        "type": "gas",
        "coyotes": 0,
        links: ["postoffice2-gas2", "gas2-house3"],
        x: 300,
        y: 500,
        id: "gas2",
    },

    "hospital": {
        "name": "Hospital",
        "type": "hospital",
        "coyotes": 0,
        links: ["house1-hospital", "hospital-house2", "hospital-house5"],
        x: 100,
        y: 300,
        id: "hospital",
    },
    
    "store": {
        "name": "Grocery Store",
        "type": "default",
        "coyotes": 0,
        links: ["postoffice2-store", "store-farm"],
        x: 200,
        y: 400,
        id: "store",
    },

    "farm": {
        "name": "Farm",
        "type": "default",
        "coyotes": 1,
        links: ["store-farm", "farm-house3"],
        x: 300,
        y: 400,
        id: "farm",
    },

    "house1": {
        "name": "Cabin",
        "type": "default",
        "coyotes": 0,
        links: ["postoffice1-house1", "house1-hospital"],
        x: 100,
        y: 200,
        id: "house1",
    },

    "house2": {
        "name": "Church",
        "type": "default",
        "coyotes": 0,
        links: ["house2-postoffice2", "hospital-house2"],
        x: 100,
        y: 400,
        id: "house2",
    },

    "house3": {
        "name": "Office Building",
        "type": "default",
        "coyotes": 0,
        links: ["farm-house3", "house3-house4", "gas2-house3"],
        x: 400,
        y: 400,
        id: "house3",
    },

    "house4": {
        "name": "Factory",
        "type": "default",
        "coyotes": 0,
        links: ["house3-house4", "house4-house5"],
        x: 400,
        y: 300,
        id: "house4",
    },

    "house5": {
        "name": "Warehouse",
        "type": "default",
        "coyotes": 0,
        links: ["house4-house5", "house5-gas1", "hospital-house5"],
        x: 400,
        y: 200,
        id: "house5",
    },

}

var links = {
    "postoffice1-gas1": {
        nodes: ["postoffice1", "gas1"],
        blight: 0,
        salt: 0,
        distance: 1,
    },

    "postoffice1-house1": {
        nodes: ["postoffice1", "house1"],
        blight: 0,
        salt: 0,
        distance: 1,
    },
    
    "house1-hospital": {
        nodes: ["house1", "hospital"],
        blight: 0,
        salt: 0,
        distance: 1,
    },

    "hospital-house2": {
        nodes: ["hospital", "house2"],
        blight: 0,
        salt: 0,
        distance: 1,
    },
    
    "house2-postoffice2": {
        nodes: ["house2", "postoffice2"],
        blight: 0,
        salt: 0,
        distance: 1,
    },

    "postoffice2-gas2": {
        nodes: ["postoffice2", "gas2"],
        blight: 0,
        salt: 0,
        distance: 1,
    },

    "postoffice2-store": {
        nodes: ["postoffice2", "store"],
        blight: 0,
        salt: 0,
        distance: 1,
    },

    "store-farm": {
        nodes: ["store", "farm"],
        blight: 0,
        salt: 0,
        distance: 1,
    },

    "farm-house3": {
        nodes: ["farm", "house3"],
        blight: 0,
        salt: 0,
        distance: 1,
    },

    "house3-house4": {
        nodes: ["house3", "house4"],
        blight: 0,
        salt: 0,
        distance: 1,
    },

    "house4-house5": {
        nodes: ["house4", "house5"],
        blight: 0,
        salt: 0,
        distance: 1,
    },

    "house5-gas1": {
        nodes: ["house5", "gas1"],
        blight: 0,
        salt: 0,
        distance: 1,
    },

    "gas2-house3": {
        nodes: ["gas2", "house3"],
        blight: 0,
        salt: 0,
        distance: 1,
    },
    
    "hospital-house5": {
        nodes: ["hospital", "house5"],
        blight: 0,
        salt: 0,
        distance: 1,
    },
    
}