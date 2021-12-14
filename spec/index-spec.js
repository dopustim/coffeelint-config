const coffeelint = require("coffeelint")
const config = require("../")
const fs = require("fs")

describe("With rule \"camel_case_classes\"", () => {

    const validFile = "./spec/fixtures/camel_case_classes/valid.coffee"
    const invalidFile = "./spec/fixtures/camel_case_classes/invalid.coffee"

    let res

    describe("valid file", () => {

        beforeAll(() => {
            const source = fs.readFileSync(validFile, "utf8")
            res = coffeelint.lint(source, config)
        })
        it("has no errors or warnings", () => {
            expect(res.length).toBeFalsy()
        })
    })

    describe("invalid file", () => {

        beforeAll(() => {
            const source = fs.readFileSync(invalidFile, "utf8")
            res = coffeelint.lint(source, config)
        })
        it("has errors or warnings", () => {
            expect(res.length).toBeTruthy()
        })
        it("has error for rule \"camel_case_classes\"", () => {
            expect(res[0].rule).toBe("camel_case_classes")
            expect(res[0].level).toBe("error")
        })
    })
})

describe("With rule \"space_operators\"", () => {

    const validFile = "./spec/fixtures/space_operators/valid.coffee"
    const invalidFile = "./spec/fixtures/space_operators/invalid.coffee"

    let res

    describe("valid file", () => {

        beforeAll(() => {
            const source = fs.readFileSync(validFile, "utf8")
            res = coffeelint.lint(source, config)
        })
        it("has no errors or warnings", () => {
            expect(res.length).toBeFalsy()
        })
    })

    describe("invalid file", () => {

        beforeAll(() => {
            const source = fs.readFileSync(invalidFile, "utf8")
            res = coffeelint.lint(source, config)
        })
        it("has errors or warnings", () => {
            expect(res.length).toBeTruthy()
        })
        it("has warn for rule \"space_operators\"", () => {
            expect(res[0].rule).toBe("space_operators")
            expect(res[0].level).toBe("warn")
        })
    })
})
