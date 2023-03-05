import {useQuery} from "@tanstack/react-query";
import {getUserProfile} from "../api";
import { IUser } from "../types";
export default function useUser() {
    const { isLoading, data, isError } = useQuery<IUser>(["me"], getUserProfile, {
        retry: false,
    });
    return {
        userLoading: isLoading,
        user: data,
        isLoggedIn: !isError,
    };
}
