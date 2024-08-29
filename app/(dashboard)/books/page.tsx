'use client'

import { useState } from "react"
import books from "@/mocks/books.mock"
import SingleBook from "./components/single-book"
import Chip from "../../components/chip"
import Button from "../../components/button"
import { CHIP } from "../../enums/chip.enum"
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export default function Books() {
  const [input, setInput] = useState('')
  const [selectedChip, setSelectedChip] = useState<CHIP>()
  const [data, setData] = useState([...books])

  function handleClick(bookName: string) {
    alert(bookName)
  }

  function handleChange(e: any) {
    setInput(e.target.value)
  }

  function handleSelectChip(chip: CHIP) {
    setSelectedChip(chip)
  }

  function handleFilterBooks() {
    const filteredBooks = books.filter(book => book.title.includes(input))
    setData(filteredBooks)
  }

  // const filteredBooks = books.filter(book => book.title.includes(input));

  return (
    <main className="flex flex-1 flex-col w-full min-h-screen">
      <div className="m-12">
        <h1 className="text-2xl font-bold text-zinc-800">
          Livros
        </h1>
        <div className="flex gap-2 mt-4 items-center">
          <div className="w-full relative">
            <MagnifyingGlassIcon className="absolute top-1.5 left-1 w-5 h-5 text-zinc-800" />
            <input
              className="w-full text-zinc-600 border-slate-200 border-[0.5px] py-[3px] pl-7 rounded-sm"
              type="text"
              value={input}
              onChange={handleChange}
            />
          </div>
          <Button
            className="px-2 py-1 bg-gray-200 rounded-sm"
            onClick={handleFilterBooks}
          >
            Pesquisar
          </Button>
        </div>
        <div className="flex gap-x-4 mt-4">
          <Chip
            title="Título"
            selected={selectedChip === CHIP.TITLE}
            onClick={() => handleSelectChip(CHIP.TITLE)}
          />
          <Chip
            title="Author"
            selected={selectedChip === CHIP.AUTHOR}
            onClick={() => handleSelectChip(CHIP.AUTHOR)}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-wrap gap-6 px-12 pb-10">
        {data.map((book, i) => (
          <SingleBook
            key={i}
            cover={book?.cover}
            title={book.title}
            author={book.author}
            onClick={() => handleClick(book.title)}
          />
        ))}
        {/* {filteredBooks.map((book, i) => (
          <SingleBook
            key={i}
            cover={book?.cover}
            title={book.title}
            author={book.author}
            onClick={() => handleClick(book.title)}
          />
        ))} */}
      </div>
    </main>
  )
}