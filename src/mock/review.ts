import { http, HttpResponse } from "msw";
import { BookReviewItem } from "../models/book.model";

export const reviewsById = http.get("http://localhost:9999/reviews/:booksId", () => {
    const data: BookReviewItem[] = [];
    return HttpResponse.json(data, {
        status: 200,
    });
});