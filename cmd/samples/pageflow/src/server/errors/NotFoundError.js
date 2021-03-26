class NotFoundError extends Error {
  constructor(id) {
    super();
    this.code = '404';
    this.message = `Could not find product with id '${id}'.`;
    this.name = 'NotFoundError';
  }
}

export default NotFoundError;
