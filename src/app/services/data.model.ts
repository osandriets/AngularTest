export class Category {
  id: string;
  icon: string;
  title: string;
  count: number;

  constructor(category?: { id: string, icon: string, title: string, count: number }) {
    if (category) {
      this.id = category.id;
      this.icon = category.icon;
      this.title = category.title;
      this.count = category.count;
    }
  }
}

export class ErrorExtend {
  code: number;
  message: string;
  description: string;
  status: number;

  constructor(error?: { code: number, message: string, description: string }, status?) {
    if (error) {
      this.code = error.code;
      this.message = error.message;
      this.description = error.description;
    }

    if (status) {
      this.status = status;
    }
  }
}

export class EnquiryTypes {
  id: number;
  name: string;

  constructor(enquiryType?: {id: number, name: string}) {
    if (enquiryType) {
      this.id = enquiryType.id;
      this.name = enquiryType.name;
    }
  }
}
