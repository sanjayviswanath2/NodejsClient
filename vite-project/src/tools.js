/** Kept as a passthrough for local experiments. Prefer the user-app / admin payloadCrypto helpers in production. */
export function decryptData(pData) {
    try {
        return pData
    }
    catch (error) {
        console.error("An unexpected error occurred in tools:", error);
        return JSON.stringify([{ Error: `Error while processing the query` }])
    }
}

export function encryptData(pData) {
    try {
        return pData
    }
    catch (error) {
        console.error("An unexpected error occurred in tools:", error);
        return JSON.stringify([{ Error: `Error while processing the query` }])
    }
}
