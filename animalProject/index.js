// Animal Project

// Base Class
class Animalia {
    constructor () {
        if (this.constructor === Animalia) {
            throw new Error('Animalia cannot be instantiated');
        }

    }
    
    isColdBlooded () {
        console.log('Some animals are cold blooded while some are warm blooded');
    }

    feed () {
        console.log('All animals feed');
    }

    reproduce () {
        console.log('Animals reproduce in their unique way')
    }

    movement () {
        console.log('Animals ');
    }
}

// Kingdom Animalia Classifications

class Vertebrates extends Animalia {
    constructor (){
        super()
    }
}

class Invertebrates extends Animalia {
    constructor (){
        super();
    }
}

// Animalias classified under Vertebrates 

class Fish extends Vertebrates {
    constructor(){
        super();
        
    }

    isColdBlooded(){
        return true;
    }

    feed () {
        console.log('Fishes feed on organic materials such as plants, other animals');
    }

    reproduce () {
        console.log('Most fishes lay a large number of small fertilized eggs, scattered outside of their body')
    }

    movement () {
        console.log('Fishes move by swimming ');
    }
}

class Amphibia extends Vertebrates {
    constructor() {
        super();
    }

    isColdBlooded(){
        return true;
    }

    feed () {
        console.log('Amphibians swallow their prey whole');
    }

    reproduce () {
        console.log('Amphibians reproduce by laying eggs that do not have a soft skin, not a hard shell.')
    }

    movement () {
        console.log('Amphabians principally move by jumping or swimming.');
    }
}

class Reptilia extends Vertebrates {
    constructor() {
        super();
    }

    isColdBlooded(){
        return true;
    }

    feed () {
        console.log("Reptiles don't chew their food to a manageable state.");
    }

    reproduce () {
        console.log('Reptiles reproduce sexually and have internal fertilization.')
    }

    movement () {
        console.log('Reptiles run, crawl, climb, jump, glide and swim.');
    }
}

class Aves extends Vertebrates {
    constructor() {
        super();
    }
    
    isColdBlooded(){
        return true;
    }

    feed () {
        console.log("Birds can't chew their food. Instead, they just drop it down their throat.");
    }

    reproduce () {
        console.log('Birds reproduce by laying eggs.')
    }

    movement () {
        console.log("Birds' wings flap with an up-and-down motion to fly.");
    }
}

class Mammals extends Vertebrates {
    constructor() {
        super();
    }
    
    isColdBlooded(){
        return true;
    }

    feed () {
        console.log("Mammals use their teeth, lips, tongue, trunk and/or hands to ingest foods.");
    }

    reproduce () {
        console.log('Mammals reproduce sexually.')
    }

    movement () {
        console.log('Mammals walk, hop, gallop, and swing from trees. They swim, dive, glide, and even fly!');
    }
}

// Animals classified under Invertebrates

class Arthropoda extends Invertebrates {
    constructor() {
        super();
    }
    
    isColdBlooded(){
        return false;
    }

    feed () {
        console.log("Arthropods ingest food through their mouth.");
    }

    reproduce () {
        console.log('Arthropods reproduce by internal fertilization')
    }

    movement () {
        console.log('Arthropods move by means of their segmental appendages.');
    }
}

const tillapia = new Fish()
console.log(tillapia);