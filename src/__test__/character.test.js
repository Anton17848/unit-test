import Character from '../js/character.js';
import Bowman from '../js/bowman.js';
import Daemon from '../js/daemon.js';
import Magician from '../js/magician.js';
import Swordsman from '../js/swordsman.js';
import Undead from '../js/undead.js';
import Zombie from '../js/zombie.js';

test('Invalid name -> too short', () => {
    expect(
        () => new Character('O', 'Bowman', 100, 100),
    ).toThrow('Invalid name length');
});

test('Invalid name -> too long', () => {
    expect(
        () => new Character('LooooooongName', 'Daemon', 100, 100),
    ).toThrow('Invalid name length');
});

test('Invalid character type', () => {
    expect(
        () => new Character('Bowy', 'FakeBowman', 100, 100),
    ).toThrow('Invalid character type');
});

test('Bowman', () => {
    const bowman = new Bowman('Bowy');
    expect(bowman).toEqual({
        name: 'Bowy',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('Daemon', () => {
    const daemon = new Daemon('Daemy');
    expect(daemon).toEqual({
        name: 'Daemy',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});

test('Magician', () => {
    const magician = new Magician('Magy');
    expect(magician).toEqual({
        name: 'Magy',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});

test('Swordsman', () => {
    const swordsman = new Swordsman('Swordy');
    expect(swordsman).toEqual({
        name: 'Swordy',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});

test('Undead', () => {
    const undead = new Undead('Undy');
    expect(undead).toEqual({
        name: 'Undy',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('Zombie', () => {
    const zombie = new Zombie('Zomy');
    expect(zombie).toEqual({
        name: 'Zomy',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});