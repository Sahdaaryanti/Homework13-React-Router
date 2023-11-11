import { Box, Center, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookForm from "../components/BookForm";
import { getBookDetailById } from "../modules/fetch";

export default function EditBookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookDetailById(id);
        setBook(response.book);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBook();
  }, [id]);

  return (
    <Box>
      {book ? (
        <BookForm bookData={book} isEdit={true} />
      ) : (
        <Center h="300px">
          <Text>Buku tidak ditemukan!</Text>
        </Center>
      )}
    </Box>
  );
}
