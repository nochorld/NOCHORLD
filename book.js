const client = new Appwrite.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6a19bb5a000745e5b9f6");

const databases = new Appwrite.Databases(client);

const DATABASE_ID = "6a19bcd1001c67574f97";
const COLLECTION_ID = "chapters";

/**
 * Load chapters for a book
 */
async function loadBook(bookId) {
    try {
        const res = await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
            [
                Appwrite.Query.equal("book_id", bookId),
                Appwrite.Query.orderAsc("chapter_number")
            ]
        );

        console.log("Appwrite response:", res);

        return res.documents || [];
    } catch (err) {
        console.error("Load error:", err);
        return [];
    }
}

/**
 * Render chapters
 */
function render(chapters) {
    const root = document.getElementById("reader");

    if (!root) return;

    if (!chapters.length) {
        root.innerHTML = "No chapters found.";
        return;
    }

    root.innerHTML = chapters.map(ch => `
        <article>
            <h2>${ch.title}</h2>
            <div style="white-space: pre-wrap;">
                ${ch.content}
            </div>
        </article>
    `).join("");
}

/**
 * Main entry point
 */
async function openBook(bookId) {
    console.log("Opening book:", bookId);

    const chapters = await loadBook(bookId);

    console.log("Loaded chapters:", chapters);

    render(chapters);
}
