import Main from './main';

describe('Unit Testing Main', () => {
    let main;

    beforeEach(() => {
        main = new Main;
    })


    it('Should return the first 2 letters of surname', () => {
        expect(main.getSurname('SHRO202208017')).toEqual('SH');
    })


    it('Should return the first 2 letters of firstname', () => {
        expect(main.getFirstName('SHRO202208017')).toEqual('RO');
    })

    it('Should return date', () => {
        expect(main.getJoinDateAndHash('SHRO202208017')).toEqual('20220801');
    })


    it('Sum of Odds', () => {
        expect(main.getSumOfOdds('SHRO202208017')).toEqual(4)
    })

    it('Sum of Evens', () => {
        expect(main.getSumOfEvens('SHRO202208017')).toEqual(11)
    })

    it('Returns hash of student ID', () => {
        expect(main.getHash('SHRO809200017')).toEqual(7)
    })

    it('Validate student ID', () => {
        expect(main.validateStudentID('SHRO809200017')).toEqual(true);

    })

})