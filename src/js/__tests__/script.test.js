import Team from "../script.js";

test("Тест метода add класса Team", () => {
    const myTeam = new Team();

    const bowerman = {
        name: "char1",
        type: "Bowerman",
        level: 4,
        health: 100,
        attack: 25,
        defence: 25,
    }

    myTeam.add(bowerman);
    expect(myTeam.member.has(bowerman)).toEqual(true);
})

test("Тест ошибки метода add класса Team", () => {
    const myTeam = new Team();

    const bowerman = {
        name: "char1",
        type: "Bowerman",
        level: 4,
        health: 100,
        attack: 25,
        defence: 25,
    }

    expect(function() {
        myTeam.add(bowerman);
        return myTeam.add(bowerman);
    }).toThrowError('Такой персонаж в команде уже есть')
})

test("Тест метода addAll класса Team", () => {
    const myTeam = new Team();

    const bowerman = {
        name: "char1",
        type: "Bowerman",
        level: 4,
        health: 100,
        attack: 25,
        defence: 25,
    }

    const swordsMan = {
        name: "char1",
        type: "swordsMan",
        level: 3,
        health: 100,
        attack: 52,
        defence: 41,
    };

    const magician = {
        name: "char1",
        type: "magician",
        level: 1,
        health: 100,
        attack: 87,
        defence: 21,
    }

    myTeam.addAll(bowerman, swordsMan, swordsMan, magician, magician, magician);
    expect(myTeam.member.size).toBe(3);
})

test("Тест метода toArray класса Team", () => {
    const myTeam = new Team();

    const bowerman = {
        name: "char1",
        type: "Bowerman",
        level: 4,
        health: 100,
        attack: 25,
        defence: 25,
    }

    const swordsMan = {
        name: "char1",
        type: "swordsMan",
        level: 3,
        health: 100,
        attack: 52,
        defence: 41,
    };

    const magician = {
        name: "char1",
        type: "magician",
        level: 1,
        health: 100,
        attack: 87,
        defence: 21,
    }

    myTeam.addAll(bowerman, swordsMan, swordsMan, magician, magician, magician);
    expect(Array.isArray(myTeam.toArray())).toEqual(true);
})