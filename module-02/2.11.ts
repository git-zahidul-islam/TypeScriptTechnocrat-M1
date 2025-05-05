{
    // utility

    // pick

    type Person = {
        name: string;
        age: number;
        class: number;
        bike?: string;
    }

    type Age = Pick<Person, 'age'>;
    type NameAndClass = Pick<Person, 'name' | 'class'>;

    // omit
    type User = {
        id: number;
        name: string;
        email: string;
      };
      
      type PublicUser = Omit<User, 'email'>;
      
      const user: PublicUser = {
        id: 1,
        name: "Zahid",
        // email is not allowed here
      };

    // Required
    type User2 = {
        id: number;
        name?: string;
      };
      
      type CompleteUser = Required<User2>;
      
      const user2: CompleteUser = {
        id: 1,
        name: "Zahid", // ✅ name is now required
      };

      // Partial
      type User3 = {
        id: number;
        name: string;
      };
      
      type UpdateUser = Partial<User3>;
      
      const user3: UpdateUser = {
        id: 1,
        // name is optional now
      };

      // Readonly
      type User4 = {
        id: number;
        name: string;
        address: string;
      };
      
      const user4: Readonly<User4> = {
        id: 1,
        name: "Zahid",
        address: 'sss'
      };
      
      user.id = 2; // ❌ Error: Cannot assign to 'id' because it is a read-only property.
      
      // Record
      type Role = 'admin' | 'user' | 'guest';

type RoleAccess = Record<Role, boolean>;

const access: RoleAccess = {
  admin: true,
  user: true,
  guest: false
};

      
      
}