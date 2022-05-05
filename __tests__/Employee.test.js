const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("Should create instance of Employee class with name, id, and email", () => {
            const employee = new Employee('Fred', 1, 'fred@fredward.net');

            // Verify that the new object has the correct properties
            expect(employee).toEqual({
                name: 'Fred',
                id: 1,
                email: 'fred@fredward.net'
            });
        });
    });

    describe("getName()", () => {
        it("Should return the name of Employee.", () => {
            // Create new objects to test with
            const employee = new Employee('Angus', 2, 'angry_angus@gus.biz');
            expect(employee.getName()).toEqual('Angus');
        });
    });
    describe("getId()", () => {
        it("Should return the id of the Employee.", () => {
            const employee = new Employee('Darth Vader', 99, 'lordvader@deathstar.pizza');
            expect(employee.getId()).toEqual(99);
        });
    });

    describe("getEmail()", () => {
        it("Should return the email address of the Employee.", () => {
            const employee = new Employee('Eggar', 12, 'iluvsugar@mib.gov');
            expect(employee.getEmail()).toEqual('iluvsugar@mib.gov');
        });
    });


    describe("getRole()", () => {
        it("Should return the role Employee.", () => {
            const employee = new Employee('Beffrey Jezos', 0, 'taxes.suck@scamazon.com');
            expect(employee.getRole()).toEqual('Employee');
        });
    });
});