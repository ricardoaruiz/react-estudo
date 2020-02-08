import { Server, Response } from 'miragejs';

const addError = (errors, field, message) => {
    errors.push({ field, message });
}

const hasErrorsInsertUpdate = (values) => {
    const errors = [];
    if (!values.name) addError(errors, 'name','O campo nome deve ser informado');
    if (!values.email) addError(errors, 'email', 'O campo email deve ser informado');
    return errors.length 
        ? new Response(400, { some: "header" }, { errors })
        : false;
}

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
                let user = JSON.parse(request.requestBody);

                const hasErrors = hasErrorsInsertUpdate(user) 
                return hasErrors 
                    ? hasErrors 
                    : schema.db.user.insert(user);
            });

            this.put('/users/:id', (schema, request) => {
                const userId = request.params.id;
                const user = JSON.parse(request.requestBody);
                const hasErrors = hasErrorsInsertUpdate(user) 

                return hasErrors 
                    ? hasErrors 
                    : schema.db.user.update(userId, user);
            })

            this.delete('/users/:id', (schema, request) => {
                return schema.db.user.remove(request.params.id);
            })
        }
    });

    server.db.loadData({
        user: [
            { id: 1, name: 'Ricardo Ruiz', email: 'ricardo.almendro.ruiz@gmail.com' },
            { id: 2, name: 'Cinthya Hayane', email: 'cinthya.hayane@gmail.com' },
            { id: 3, name: 'Guilherme Ruiz', email: 'guilherme.carvalho.ruiz@gmail.com' },
            { id: 4, name: 'Haruko Deise Maria Nakamura', email: 'haruko@gmail.com' },
            { id: 5, name: 'Jade Carvalho Ruiz', email: 'jade@gmail.com' },
            { id: 6, name: 'Kadu Carvalho Ruiz', email: 'kadu@gmail.com' },
            { id: 7, name: 'Bia Carvalho Ruiz', email: 'bia@gmail.com' },
            { id: 8, name: 'Dorival Almendro Ruiz', email: 'dori@gmail.com' },
            { id: 9, name: 'Lida Trombino Almendro Ruiz', email: 'lida@gmail.com' },
        ]
    })
};