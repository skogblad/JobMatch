export const formatDate = (dateString?: string | null): string | null => {
    if (!dateString) return null;

    try{
        return new Date(dateString).toLocaleDateString("sv-SE", {
            day: "numeric",
            month: "long",
            year: "numeric"
        });
    } catch {
        return null;
    }
}