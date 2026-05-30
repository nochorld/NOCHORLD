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

        return res.documents;
    } catch (err) {
        console.error("Load error:", err);
        return [];
    }
}

/**
 * Render chapters to screen
 */
function render(chapters) {
    const root = document.getElementById("reader");

    if (!root) {
        console.error("Missing #reader in HTML");
        return;
    }

    let html = "";

    chapters.forEach(ch => {
        html += `
            <article>
                <h2>${ch.title}</h2>
                <div style="white-space: pre-wrap;">
                    ${ch.content}
                </div>
            </article>
        `;
    });

    root.innerHTML = html;
}

/**
 * Main function
 */
async function openBook(bookId) {
    const chapters = await loadBook(bookId);

    console.log("Loaded chapters:", chapters);

    if (!chapters.length) {
        document.getElementById("reader").innerHTML =
            "No chapters found.";
        return;
    }

    render(chapters);
}
