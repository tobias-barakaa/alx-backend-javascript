class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!\n');
  }
}
export default AppController;
module.exports = AppController;
