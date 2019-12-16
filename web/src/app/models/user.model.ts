export class UserModel {
    id: number;
    createdDate: Date;
    modifiedDate: Date;
    userId: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    companyName: string;
    isLockedOut: boolean;
    isActive: boolean;
    requiresPasswordChange: boolean;
    bearerToken: string;
}