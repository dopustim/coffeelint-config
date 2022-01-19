const coffeelint = require("@coffeelint/cli")
const config = require("../")
const fs = require("fs")

for (const ruleName in config) {

    if (!fs.existsSync(`./spec/fixtures/${ruleName}`) ||
        !fs.lstatSync(`./spec/fixtures/${ruleName}`).isDirectory())
        continue

    describe(`With rule "${ruleName}"`, () => {

        const validFile = `./spec/fixtures/${ruleName}/valid.coffee`
        const invalidFile = `./spec/fixtures/${ruleName}/invalid.coffee`

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
            switch (config[ruleName].level) {
                case "warn":
                    // Warnings
                    it(`has warning for rule "${ruleName}"`, () => {
                        expect(res[0].rule).toBe(ruleName)
                        expect(res[0].level).toBe("warn")
                    })
                    break
                case "error":
                    // Errors
                    it(`has error for rule "${ruleName}"`, () => {
                        expect(res[0].rule).toBe(ruleName)
                        expect(res[0].level).toBe("error")
                    })
                    break
            }
        })
    })
}
