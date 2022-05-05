const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("Should create instance of Manager class with name, id, email, and office number", () => {
            const manager = new Manager('Fred', 1, 'fred@fredward.net', 101);

            // Verify that the new object has the correct properties
            expect(manager).toEqual({
                name: 'Fred',
                id: 1,
                email: 'fred@fredward.net',
                officeNumber: 101
            });
        });
    });

    describe("getName()", () => {
        it("Should return the name of Manager.", () => {
            // Create new objects to test with
            const manager = new Manager('Angus', 2, 'angry_angus@gus.biz', 202);
            expect(manager.getName()).toEqual('Angus');
        });
    });
    describe("getId()", () => {
        it("Should return the id of the Manager.", () => {
            const manager = new Manager('Darth Vader', 99, 'lordvader@deathstar.pizza', 800);
            expect(manager.getId()).toEqual(99);
        });
    });

    describe("getEmail()", () => {
        it("Should return the email address of the Manager.", () => {
            const manager = new Manager('Eggar', 12, 'iluvsugar@mib.gov', 7);
            expect(manager.getEmail()).toEqual('iluvsugar@mib.gov');
        });
    });

    describe("getOfficeNumber()", () => {
        it("Should return the office number of the Manager.", () => {
            const manager = new Manager('Eggar', 12, 'iluvsugar@mib.gov', 100);
            expect(manager.getOfficeNumber()).toEqual(100);
        });
    });


    describe("getRole()", () => {
        it("Should return the role Manager.", () => {
            const manager = new Manager('Beffrey Jezos', 0, 'taxes.suck@scamazon.com', 666);
            expect(manager.getRole()).toEqual('Manager');
        });
    });
});