import { Server, Response } from 'miragejs';

export const startApiServer = () => {
    const server = new Server({

        routes() {
            this.namespace = "api";

            this.get("/users", schema => {
                return schema.db.user;
            });

            this.get("/users/:id", (schema, request) => {
                return schema.db.user.find(request.params.id);
            });

            this.post('/users', (schema, request) => {
                let attrs = JSON.parse(request.requestBody);

                if (attrs.name && attrs.email) {
                    return schema.db.user.insert(attrs);
                } else {
                    const errors = [];
                    if (!attrs.name) errors.push('O campo nome deve ser informado');
                    if (!attrs.email) errors.push('O campo email deve ser informado');
                    return new Response(400, { some: "header" }, { errors })
                }
            });
        }
    });

    server.db.loadData({
        user: [
            { id: 1, name: 'Ricardo Ruiz', email: 'ricardo.almendro.ruiz@gmail.com' },
            { id: 2, name: 'Cinthya Hayane', email: 'cinthya.hayane@gmail.com' },
            { id: 3, name: 'Guilherme Ruiz', email: 'guilherme.carvalho.ruiz@gmail.com' }
        ]
    })
};