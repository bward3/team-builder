const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("Should create instance of Engineer class with name, id, email, and Github", () => {
            const engineer = new Engineer('Fred', 1, 'fred@fredward.net', 'fredward18');

            // Verify that the new object has the correct properties
            expect(engineer).toEqual({
                name: 'Fred',
                id: 1,
                email: 'fred@fredward.net',
                github: 'fredward18'
            });
        });
    });

    describe("getName()", () => {
        it("Should return the name of Engineer.", () => {
            // Create new objects to test with
            const engineer = new Engineer('Angus', 2, 'angry_angus@gus.biz', 'anguscode');
            expect(engineer.getName()).toEqual('Angus');
        });
    });
    describe("getId()", () => {
        it("Should return the id of the Engineer.", () => {
            const engineer = new Engineer('Darth Vader', 99, 'lordvader@deathstar.pizza', 'ihatesand');
            expect(engineer.getId()).toEqual(99);
        });
    });

    describe("getEmail()", () => {
        it("Should return the email address of the Engineer.", () => {
            const engineer = new Engineer('Eggar', 12, 'iluvsugar@mib.gov', 'phpiscool');
            expect(engineer.getEmail()).toEqual('iluvsugar@mib.gov');
        });
    });

    describe("getGithub()", () => {
        it("Should return the email address of the Engineer.", () => {
            const engineer = new Engineer('Eggar', 12, 'iluvsugar@mib.gov', 'phpiscool');
            expect(engineer.getGithub()).toEqual('phpiscool');
        });
    });


    describe("getRole()", () => {
        it("Should return the role Engineer.", () => {
            const engineer = new Engineer('Beffrey Jezos', 0, 'taxes.suck@scamazon.com', 'unionbuster99');
            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
});