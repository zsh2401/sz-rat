import "ts-jest"
import useAsyncState from "../src/sz-support/common/hooks/useAsyncState"
import { renderHook } from "@testing-library/react-hooks"
describe("useAsyncState test", () => {
    
    it("should returns initial state at first", () => {

        const hook = renderHook((props) => {
            return useAsyncState({
                initialState: props
            });
        }, { initialProps: 1 });


        expect(hook.result.current.state).toBe(1);
    })
})