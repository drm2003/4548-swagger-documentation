import { Router } from "express";
import bookController from "./books/book.controller";
import { verifyToken } from "./auth/verify.middleware";

const routes = Router();

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Cria um novo livro
 *     tags:
 *       - Books
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: Livro criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Livro criado com sucesso
 *   get:
 *     summary: Lista todos os livros
 *     tags:
 *       - Books
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de livros recuperada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
routes.post("/books", bookController.create);
routes.get("/books", verifyToken, bookController.find);
routes.get("/books/:title", bookController.findByTitle);
routes.put("/books/:id", bookController.update);

/**
 * @swagger
 * /books/{title}:
 *   get:
 *     summary: Find a book by title
 *     tags:
 *       - Books
 *     parameters:
 *       - name: title
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Book found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Update a book
 *     tags:
 *       - Books
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Book updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: Book not found
 *       400:
 *         description: Bad Request
 *
 *   delete:
 *     summary: Delete a book
 *     tags:
 *       - Books
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Book deleted
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal Server Error
 */
routes.delete("/books/:id", bookController.delete);

export { routes };
