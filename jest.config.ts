import type { Config } from "@jest/types"
const config: Config.InitialOptions = {
    verbose: true,
    preset: "ts-jest",
    testEnvironment: "jsdom",
    maxConcurrency: 1,
}
export default config