const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("Should create instance of Intern class with name, id, email, and school", () => {
            const intern = new Intern('Fred', 1, 'fred@fredward.net', 'University of Connecticut');

            // Verify that the new object has the correct properties
            expect(intern).toEqual({
                name: 'Fred',
                id: 1,
                email: 'fred@fredward.net',
                school: 'University of Connecticut'
            });
        });
    });

    describe("getName()", () => {
        it("Should return the name of Intern.", () => {
            // Create new objects to test with
            const intern = new Intern('Angus', 2, 'angry_angus@gus.biz', 'University of Alabama');
            expect(intern.getName()).toEqual('Angus');
        });
    });
    describe("getId()", () => {
        it("Should return the id of the Intern.", () => {
            const intern = new Intern('Darth Vader', 99, 'lordvader@deathstar.pizza', 'Coruscant College');
            expect(intern.getId()).toEqual(99);
        });
    });

    describe("getEmail()", () => {
        it("Should return the email address of the Intern.", () => {
            const intern = new Intern('Eggar', 12, 'iluvsugar@mib.gov', 'Planet X University');
            expect(intern.getEmail()).toEqual('iluvsugar@mib.gov');
        });
    });

    describe("getSchool()", () => {
        it("Should return the school of the Intern.", () => {
            const intern = new Intern('Eggar', 12, 'iluvsugar@mib.gov', 'Planet X University');
            expect(intern.getSchool()).toEqual('Planet X University');
        });
    });


    describe("getRole()", () => {
        it("Should return the role Intern.", () => {
            const intern = new Intern('Beffrey Jezos', 0, 'taxes.suck@scamazon.com', 'Brinceton University');
            expect(intern.getRole()).toEqual('Intern');
        });
    });
});