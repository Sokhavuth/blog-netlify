import bcrypt from "bcryptjs";
class User {
  async count(req) {
    return await req.prisma.user.count();
  }
  async createRootUser(req) {
    const hashPassword = bcrypt.hashSync("Tin2024", 8);
    await req.prisma.user.create({
      data: {
        email: "sokhavuth@khmerweb.app",
        title: "Sokhavuth",
        password: hashPassword,
        role: "Admin",
        thumb: "",
        content: "",
        date: ""
      }
    });
  }
  async checkUser(req) {
    return await req.prisma.user.findUnique({ where: { email: req.body.email } });
  }
  async getUsers(req, amount) {
    return await req.prisma.user.findMany({
      take: amount,
      orderBy: [{ date: "desc" }, { id: "desc" }]
    });
  }
  async createUser(req) {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const user = {
      title: req.body.title,
      password: hashedPassword,
      email: req.body.email,
      role: req.body.role,
      thumb: req.body.thumb,
      content: req.body.content,
      date: req.body.datetime
    };
    await req.prisma.user.create({ data: user });
  }
  async getUser(req) {
    return await req.prisma.user.findUnique({ where: { id: req.params.id } });
  }
  async updateUser(req) {
    const user = await this.getUser(req);
    let hashedPassword;
    if (req.body.password !== user.password) {
      hashedPassword = bcrypt.hashSync(req.body.password, 10);
    } else {
      hashedPassword = req.body.password;
    }
    const newUser = {
      title: req.body.title,
      password: hashedPassword,
      email: req.body.email,
      thumb: req.body.thumb,
      content: req.body.content,
      date: req.body.datetime
    };
    await req.prisma.user.update({ where: { id: req.params.id }, data: newUser });
  }
  async deleteUser(req) {
    await req.prisma.user.delete({ where: { id: req.params.id } });
  }
  async paginateUsers(req, amount) {
    const users = await req.prisma.user.findMany({
      orderBy: [{ date: "desc" }, { id: "desc" }],
      skip: amount * (parseInt(req.body.page) - 1),
      take: amount
    });
    return users;
  }
}
const userDb = new User();
export {
  userDb as u
};
