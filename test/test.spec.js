'use strict';

describe('Days360() function tests', function () {

    it('American: Days("29.10.2014","31.10.2014") shoul be 2', function () {
        var sd1 = new Date(2014, 9, 29);
        var fd1 = new Date(2014, 9, 31);
        var result = Days360(sd1,fd1);
        expect(result).toEqual(2);
    });

    it('American: Days("30.10.2014","31.10.2014") shoul be 0', function () {
        var sd1 = new Date(2014, 9, 30);
        var fd1 = new Date(2014, 9, 31);
        var result = Days360(sd1, fd1);
        expect(result).toEqual(0);
    });

    it('American: Days("30.10.2014","01.11.2014") shoul be 1', function () {
        var sd1 = new Date(2014, 9, 30);
        var fd1 = new Date(2014, 10, 1);
        var result = Days360(sd1, fd1);
        expect(result).toEqual(1);
    });

    it('American: Days("31.10.2014","01.11.2014") shoul be 1', function () {
        var sd1 = new Date(2014, 9, 31);
        var fd1 = new Date(2014, 10, 1);
        var result = Days360(sd1, fd1);
        expect(result).toEqual(1);
    });

    it('American: Days("01.11.2014","01.11.2014") shoul be 0', function () {
        var sd1 = new Date(2014, 10, 1);
        var fd1 = new Date(2014, 10, 1);
        var result = Days360(sd1, fd1);
        expect(result).toEqual(0);
    });

    it('American: Days("01.11.2014","02.11.2014") shoul be 1', function () {
        var sd1 = new Date(2014, 10, 1);
        var fd1 = new Date(2014, 10, 2);
        var result = Days360(sd1, fd1);
        expect(result).toEqual(1);
    });

    it('American: Days("01.11.2014","03.11.2014") shoul be 2', function () {
        var sd1 = new Date(2014, 10, 1);
        var fd1 = new Date(2014, 10, 3);
        var result = Days360(sd1, fd1);
        expect(result).toEqual(2);
    });


    it('European: Days("29.10.2014","31.10.2014") shoul be 1', function () {
        var sd1 = new Date(2014, 9, 29);
        var fd1 = new Date(2014, 9, 31);
        var result = Days360(sd1, fd1, true);
        expect(result).toEqual(1);
    });

    it('European: Days("30.10.2014","31.10.2014") shoul be 0', function () {
        var sd1 = new Date(2014, 9, 30);
        var fd1 = new Date(2014, 9, 31);
        var result = Days360(sd1, fd1, true);
        expect(result).toEqual(0);
    });

    it('European: Days("30.10.2014","01.11.2014") shoul be 1', function () {
        var sd1 = new Date(2014, 9, 30);
        var fd1 = new Date(2014, 10, 1);
        var result = Days360(sd1, fd1, true);
        expect(result).toEqual(1);
    });

    it('European: Days("31.10.2014","01.11.2014") shoul be 1', function () {
        var sd1 = new Date(2014, 9, 31);
        var fd1 = new Date(2014, 10, 1);
        var result = Days360(sd1, fd1, true);
        expect(result).toEqual(1);
    });

    it('European: Days("01.11.2014","01.11.2014") shoul be 0', function () {
        var sd1 = new Date(2014, 10, 1);
        var fd1 = new Date(2014, 10, 1);
        var result = Days360(sd1, fd1, true);
        expect(result).toEqual(0);
    });

    it('European: Days("01.11.2014","02.11.2014") shoul be 1', function () {
        var sd1 = new Date(2014, 10, 1);
        var fd1 = new Date(2014, 10, 2);
        var result = Days360(sd1, fd1, true);
        expect(result).toEqual(1);
    });

    it('European: Days("01.11.2014","03.11.2014") shoul be 2', function () {
        var sd1 = new Date(2014, 10, 1);
        var fd1 = new Date(2014, 10, 3);
        var result = Days360(sd1, fd1, true);
        expect(result).toEqual(2);
    });
});

describe('Ararog bersion of Days360() function tests', function () {

    it('American: Days("29.10.2014","31.10.2014") shoul be 2', function () {
        var sd1 = new Date(2014, 9, 29);
        var fd1 = new Date(2014, 9, 31);
        var result = days360(sd1, fd1);
        expect(result).toEqual(2);
    });

    it('American: Days("30.10.2014","31.10.2014") shoul be 0', function () {
        var sd1 = new Date(2014, 9, 30);
        var fd1 = new Date(2014, 9, 31);
        var result = days360(sd1, fd1);
        expect(result).toEqual(0);
    });

    it('American: Days("30.10.2014","01.11.2014") shoul be 1', function () {
        var sd1 = new Date(2014, 9, 30);
        var fd1 = new Date(2014, 10, 1);
        var result = days360(sd1, fd1);
        expect(result).toEqual(1);
    });

    it('American: Days("31.10.2014","01.11.2014") shoul be 1', function () {
        var sd1 = new Date(2014, 9, 31);
        var fd1 = new Date(2014, 10, 1);
        var result = days360(sd1, fd1);
        expect(result).toEqual(1);
    });

    it('American: Days("01.11.2014","01.11.2014") shoul be 0', function () {
        var sd1 = new Date(2014, 10, 1);
        var fd1 = new Date(2014, 10, 1);
        var result = days360(sd1, fd1);
        expect(result).toEqual(0);
    });

    it('American: Days("01.11.2014","02.11.2014") shoul be 1', function () {
        var sd1 = new Date(2014, 10, 1);
        var fd1 = new Date(2014, 10, 2);
        var result = days360(sd1, fd1);
        expect(result).toEqual(1);
    });

    it('American: Days("01.11.2014","03.11.2014") shoul be 2', function () {
        var sd1 = new Date(2014, 10, 1);
        var fd1 = new Date(2014, 10, 3);
        var result = days360(sd1, fd1);
        expect(result).toEqual(2);
    });


    it('European: Days("29.10.2014","31.10.2014") shoul be 1', function () {
        var sd1 = new Date(2014, 9, 29);
        var fd1 = new Date(2014, 9, 31);
        var result = days360(sd1, fd1);
        expect(result).toEqual(1);
    });

    it('European: Days("30.10.2014","31.10.2014") shoul be 0', function () {
        var sd1 = new Date(2014, 9, 30);
        var fd1 = new Date(2014, 9, 31);
        var result = days360(sd1, fd1);
        expect(result).toEqual(0);
    });

    it('European: Days("30.10.2014","01.11.2014") shoul be 1', function () {
        var sd1 = new Date(2014, 9, 30);
        var fd1 = new Date(2014, 10, 1);
        var result = days360(sd1, fd1);
        expect(result).toEqual(1);
    });

    it('European: Days("31.10.2014","01.11.2014") shoul be 1', function () {
        var sd1 = new Date(2014, 9, 31);
        var fd1 = new Date(2014, 10, 1);
        var result = days360(sd1, fd1);
        expect(result).toEqual(1);
    });

    it('European: Days("01.11.2014","01.11.2014") shoul be 0', function () {
        var sd1 = new Date(2014, 10, 1);
        var fd1 = new Date(2014, 10, 1);
        var result = days360(sd1, fd1);
        expect(result).toEqual(0);
    });

    it('European: Days("01.11.2014","02.11.2014") shoul be 1', function () {
        var sd1 = new Date(2014, 10, 1);
        var fd1 = new Date(2014, 10, 2);
        var result = days360(sd1, fd1);
        expect(result).toEqual(1);
    });

    it('European: Days("01.11.2014","03.11.2014") shoul be 2', function () {
        var sd1 = new Date(2014, 10, 1);
        var fd1 = new Date(2014, 10, 3);
        var result = days360(sd1, fd1);
        expect(result).toEqual(2);
    });
});