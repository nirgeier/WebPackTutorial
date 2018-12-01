/**
 * This is our sample application code.
 */
import {
  default as Calculator
} from "../../src/Calculator";

import {
  expect
} from "chai";


describe("Test Calculator", () => {
  describe("Test add", () => {
    it("Add 2 Numbers", (done) => {
      expect(Calculator.add(2, 3)).to.be.equal(5);
      done();
    });

    it("Add 2 Strings", (done) => {
      expect(Calculator.add("2", "3")).to.be.equal("23");
      done();
    });

  }); // describe

  describe("Test Substract", () => {
    it("Substract 2 Numbers", (done) => {
      expect(Calculator.sub(2, 3)).to.be.equal(-1);
      done();
    });

    it("Substract 2 Strings", (done) => {
      expect(Calculator.sub("2", "3")).to.be.equal(-1);
      done();
    });

  }); // describe

  describe("Test Multiply", () => {
    it("Multiply 2 Numbers", (done) => {
      expect(Calculator.mul(2, 3)).to.be.equal(6);
      done();
    });

    it("Multiply 2 Strings", (done) => {
      expect(Calculator.mul("-2", "3")).to.be.equal(-6);
      done();
    });

  }); // describe

  describe("Test Divide", () => {
    it("Divide 2 Numbers", (done) => {
      expect(Calculator.div(6, 3)).to.be.equal(2);
      done();
    });

    it("Divide 2 Strings", (done) => {
      expect(Calculator.div("6", "3")).to.be.equal(2);
      done();
    });

  }); // describe

}); // describe