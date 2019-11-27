import { useHistory } from "react-router";

export default function useGoBack(): () => void {
    let history = useHistory();
    return () => {
        history.go(-1);
    }
}