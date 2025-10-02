export interface IStudent {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  status: 'active' | 'inactive';
  role: 'Student' | 'Instructor' | 'Admin';
  group?: IGroup | null;
  avg_score?: number;
}

export interface IGroup {
  _id: string;
  name: string;
  status: 'active' | 'inactive';
  instructor: string;
  students: string[];
  max_students: number;
  updatedAt: string;
  createdAt: string;
  __v: number;
}
