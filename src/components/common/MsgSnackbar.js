import { useSnackbar } from "notistack";

export function useMessage() {
    const { enqueueSnackbar } = useSnackbar();
    const getError = (err) => {
        if (typeof err === "string") return err;
        return err.config?.actionName ?? "Thao tác";
    };
    return {
        error: (strMsg) =>
            enqueueSnackbar("Thất bại, " + getError(strMsg), {
                variant: "error",
            }),
        success: (strMsg) =>
            enqueueSnackbar("Thành công, " + getError(strMsg), {
                variant: "success",
            }),
    };
}
