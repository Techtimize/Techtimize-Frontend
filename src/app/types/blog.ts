export type blogsProps = {
    _id: string;
    title: string;
     blogTypeId: blogTypeId,
      createdBy: string;
      imageUrl: string;
      description: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      __v: number
};
  

type blogTypeId =  {
        _id: string,
        type: string,
        isActive: boolean,
        createdAt: string,
        updatedAt: string,
        __v: 0
}

