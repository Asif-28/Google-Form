"use client";
import dbConnect from "@/config/dbConnect";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
dbConnect();
export default function Home() {
  const router = useRouter();
  const [mcq, setMcq] = useState("");
  const [checkbox, setCheckbox] = useState("");
  const [shortAnswer, setShortAnswer] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [linerScale, setLinerScale] = useState("");
  const [multiGrid, setMultiGrid] = useState("");
  const [tickBoxGrid, setTickBoxGrid] = useState("");



  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    try {
      const { data } = await axios.post("/api/details", {
        mcq,
        checkbox,
        shortAnswer,
        paragraph,
        dropdown,
        linerScale,
        multiGrid,
        tickBoxGrid
      });

      console.log("success", data);
      router.push("./success");
    } catch (error) {
      console.log("failed", error);
    }
  }

  const clearForm = () => {
    setMcq("");
    setCheckbox("")
    setParagraph("");
    setShortAnswer("")
    setDropdown("");
    setLinerScale("");
    setMultiGrid("");
    setTickBoxGrid("");

  }

  // console.log(mcq);
  // console.log(checkbox);
  // console.log(shortAnswer);
  // console.log(paragraph);
  // console.log(dropdown);
  // console.log(linerScale);
  // console.log(multiGrid);
  // console.log(tickBoxGrid);
  return (
    <div className="px-2 sm:px-0 form ">
      <form onSubmit={submitHandler}>
        <div className="section mt-3 flex flex-col gap-4 ">
          <div className="top-section  border-t-[10px] border-indigo-700 rounded-lg bg-[#fff]">
            <div className="border rounded-b-lg px-5 py-4 border-gray-400">
              <h1 className="text-4xl my-2">Assignment Task</h1>
              <hr className="bg-slate-400 h-[2px]" />
              <p className="my-3">
                email@gmail.com{" "}
                <span className="text-blue-600 cursor-pointer">
                  Switch account
                </span>
              </p>
              <p className="my-3 text-gray-600">
                The name and photo associated with your Google account will be
                recorded when you upload files and submit this form. Your email
                is not part of your response.
              </p>
              <hr className="bg-slate-400 h-[2px]" />
              <p className="text-red-600 my-3">* Indicates required question</p>
            </div>
          </div>
          <div className=" section-1 border rounded-lg px-5 pt-8 pb-12 border-gray-400 bg-[#fff]">
            <div>
              <p className="mb-4 text-xl">
                MCQ <span className="text-red-500">*</span>
              </p>
               {" "}
              <input
                className="my-3"
                type="radio"
                id="option1"
                name="fav_language"
                required
                value="option1"
                onChange={(e) => setMcq(e.target.value)}
              />
                <label htmlFor="option1">Option 1</label>
              <br /> {" "}
              <input
                className="my-3"
                type="radio"
                id="option2"
                name="fav_language"
                required
                value="option2"
                onChange={(e) => setMcq(e.target.value)}
              />
                <label htmlFor="css">Option 2</label>
              <br /> {" "}
              <input
                className="my-3"
                type="radio"
                id="option3"
                name="fav_language"
                required
                value="option3"
                onChange={(e) => setMcq(e.target.value)}
              />
                <label htmlFor="option3">Option 3</label>
            </div>
          </div>
          <div className=" section-2 border rounded-lg px-5 pt-8 pb-12 border-gray-400 bg-[#fff]">
            <div>
              <p className="mb-4 text-xl">
                CheckBox <span className="text-red-500">*</span>
              </p>
               {" "}
              <input
                className="my-3"
                type="checkbox"
                id="option1"
                name="fav_language"
                value="Option1"
                onChange={(e) => setCheckbox(e.target.value)}
              />
                <label htmlFor="option1">Option 1</label>
              <br /> {" "}
              <input
                className="my-3"
                type="checkbox"
                id="option2"
                name="fav_language"
                value="Option2"
                onChange={(e) => setCheckbox(e.target.value)}
              />
                <label htmlFor="css">Option 2</label>
              <br /> {" "}
              <input
                className="my-3"
                type="checkbox"
                id="option3"
                name="fav_language"
                value="Option3"
                onChange={(e) => setCheckbox(e.target.value)}
              />
                <label htmlFor="option3">Option 3</label>
            </div>
          </div>
          <div className=" section-3 border rounded-lg px-5 pt-8 pb-12 border-gray-400 bg-[#fff]">
            <div className="flex flex-col">
              <p className="mb-4 text-xl">
                Short Answer<span className="text-red-500">*</span>
              </p>
              <input
                className="border-b-2 my-3"
                placeholder="Your Answer"
                type="text"
                id="fname"
                required
                value={shortAnswer}
                onChange={(e) => setShortAnswer(e.target.value)}
              ></input>
            </div>
          </div>
          <div className=" section-4 border rounded-lg px-5 pt-8 pb-12 border-gray-400 bg-[#fff]">
            <div className="flex flex-col">
              <p className="mb-4 text-xl">
                ParaGraph<span className="text-red-500">*</span>
              </p>
              <input
                className="border-b-2 my-3"
                placeholder="Your Answer"
                type="text"
                id="fname"
                required
                value={paragraph}
                onChange={(e) => setParagraph(e.target.value)}
              ></input>
            </div>
          </div>
          <div className=" section-5 border rounded-lg px-5 pt-8 pb-12 border-gray-400 bg-[#fff]">
            <div className="flex flex-col">
              <p className="mb-4 text-xl">
                Drop down<span className="text-red-500">*</span>
              </p>
              <select
                id="dropdown"
                required
                onChange={(e) => setDropdown(e.target.value)}
                className="my-3 px-2 py-2 sm:py-3 rounded-md w-[200px] bg-[#fff] border border-gray-400"
              >
                <option value="">Choose</option>
                <option value="Option1">Option1</option>
                <option value="Option2">Option2</option>
                <option value="Option3">Option3</option>
              </select>
            </div>
          </div>
          <div className=" section-5 border rounded-lg px-5 pt-8 pb-12 border-gray-400 bg-[#fff]">
            <div className="flex flex-col">
              <p className="mb-4 text-xl my-3">
                File Upload<span className="text-red-500">*</span>
              </p>
              <input
                className="my-3"
                placeholder="Add file"
                type="file"
                id="myfile"
                required
                name="myfile"
              ></input>
            </div>
          </div>
          <div className=" section-6 border rounded-lg px-5 pt-8 pb-12 border-gray-400 bg-white">
            <div className="flex flex-col">
              <p className="mb-4 text-xl">
                Liner Scale<span className="text-red-500">*</span>
              </p>
              <div className="my-4">
                <div className="flex gap-2 sm:gap-5">
                  <div className="flex flex-col justify-center mr-7 sm:mr-12">
                    <h3>Worst</h3>
                  </div>
                  <div className="flex flex-col mr-3 sm:mr-12">
                    <label htmlFor="option1"> 1</label>
                    <br />
                    <input
                      required
                      className="my-3"
                      type="radio"
                      id="option1"
                      name="rate"
                      value="1"
                      onChange={(e) => setLinerScale(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mr-3 sm:mr-12">
                    <label htmlFor="option1"> 2</label>
                    <br />
                    <input
                      className="my-3"
                      type="radio"
                      id="option2"
                      name="rate"
                      required
                      value="2"
                      onChange={(e) => setLinerScale(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mr-3 sm:mr-12">
                    <label htmlFor="option1"> 3</label>
                    <br />
                    <input
                      className="my-3"
                      type="radio"
                      id="option3"
                      name="rate"
                      required
                      value="3"
                      onChange={(e) => setLinerScale(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mr-3 sm:mr-12">
                    <label htmlFor="option1"> 4</label>
                    <br />
                    <input
                      className="my-3"
                      type="radio"
                      id="option4"
                      name="rate"
                      required
                      value="4"
                      onChange={(e) => setLinerScale(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mr-3 sm:mr-12">
                    <label htmlFor="option1"> 5</label>
                    <br />
                    <input
                      className="my-3"
                      type="radio"
                      id="option5"
                      name="rate"
                      required
                      value="5"
                      onChange={(e) => setLinerScale(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col justify-center ml-7 sm:mr-12">
                    <h3>Best</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" section-7 border rounded-lg px-5 pt-8 pb-12 border-gray-400 bg-[#fff]">
            <div className="flex flex-col">
              <p className="mb-4 text-xl">
                Multi choice Grid <span className="text-red-500">*</span>
              </p>
              <div className="my-4">
                <div className="flex gap-5">
                  <div className="flex flex-col mr-12 ml-[40px] sm:ml-[60px] relative">
                    <div className="flex gap-[30px] sm:gap-[100px]">
                      <div className="row absolute top-[53px] -left-10">
                        <label htmlFor="row">Row1</label>
                      </div>
                      <div className="col flex flex-1 flex-col ml-4">
                        <label htmlFor="column"> Column1</label>
                        <br />
                        <input
                          className="my-3"
                          type="radio"
                          id="option1"
                          name="1"
                          required
                          value="1"
                          onChange={(e) => setMultiGrid(e.target.value)}
                        />
                        <input
                          className="my-3"
                          type="radio"
                          id="option2"
                          name="2"
                          required
                          value="2"
                          onChange={(e) => setMultiGrid(e.target.value)}
                        />
                        <input
                          className="my-3"
                          type="radio"
                          id="option3"
                          name="3"
                          required
                          value="3"
                          onChange={(e) => setMultiGrid(e.target.value)}
                        />
                      </div>
                      <div className="row absolute top-[95px] sm:top-[90px] -left-10">
                        <label htmlFor="row">Row2</label>
                      </div>
                      <div className="col flex flex-1 flex-col">
                        <label htmlFor="column"> Column2</label>
                        <br />
                        <input
                          className="my-3"
                          type="radio"
                          id="option1"
                          name="1"
                          required
                          value="1"
                          onChange={(e) => setMultiGrid(e.target.value)}
                        />
                        <input
                          className="my-3"
                          type="radio"
                          id="option2"
                          name="2"
                          required
                          value="2"
                          onChange={(e) => setMultiGrid(e.target.value)}
                        />
                        <input
                          className="my-3"
                          type="radio"
                          id="option3"
                          name="3"
                          required
                          value="3"
                          onChange={(e) => setMultiGrid(e.target.value)}
                        />
                      </div>
                      <div className="row absolute top-[132px] sm:top-[128px] -left-10">
                        <label htmlFor="row">Row3</label>
                      </div>
                      <div className="col flex flex-1 flex-col">
                        <label htmlFor="column"> Column3</label>
                        <br />
                        <input
                          className="my-3"
                          type="radio"
                          id="option1"
                          name="1"
                          required
                          value="1"
                          onChange={(e) => setMultiGrid(e.target.value)}
                        />
                        <input
                          className="my-3"
                          type="radio"
                          id="option2"
                          name="2"
                          required
                          value="2"
                          onChange={(e) => setMultiGrid(e.target.value)}
                        />
                        <input
                          className="my-3"
                          type="radio"
                          id="option3"
                          name="3"
                          required
                          value="3"
                          onChange={(e) => setMultiGrid(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" section-8 border rounded-lg px-5 pt-8 pb-12 border-gray-400 bg-[#fff]">
            <div className="flex flex-col">
              <p className="mb-4 text-xl">
                Tick Box Grid <span className="text-red-500">*</span>
              </p>
              <div className="my-4">
                <div className="flex gap-5">
                  <div className="flex flex-col mr-12 ml-[40px] sm:ml-[60px] relative">
                    <div className="flex gap-[30px] sm:gap-[100px]">
                      <div className="row absolute top-[53px] -left-10">
                        <label htmlFor="row">Row1</label>
                      </div>
                      <div className="col flex flex-1 flex-col ml-4">
                        <label htmlFor="column"> Column1</label>
                        <br />
                        <input
                          className="my-3"
                          type="checkbox"
                          id="option1"
                          name="fav_language"
                          value="1"
                          onChange={(e) => setTickBoxGrid(e.target.value)}
                        />
                        <input
                          className="my-3"
                          type="checkbox"
                          id="option1"
                          name="fav_language"
                          value="2"
                          onChange={(e) => setTickBoxGrid(e.target.value)}
                        />
                        <input
                          className="my-3"
                          type="checkbox"
                          id="option1"
                          name="fav_language"
                          value="3"
                          onChange={(e) => setTickBoxGrid(e.target.value)}
                        />
                      </div>
                      <div className="row absolute top-[95px] sm:top-[90px] -left-10">
                        <label htmlFor="row">Row2</label>
                      </div>
                      <div className="col flex flex-1 flex-col">
                        <label htmlFor="column"> Column2</label>
                        <br />
                        <input
                          className="my-3"
                          type="checkbox"
                          id="option1"
                          name="fav_language"
                          value="1"
                          onChange={(e) => setTickBoxGrid(e.target.value)}
                        />
                        <input
                          className="my-3"
                          type="checkbox"
                          id="option1"
                          name="fav_language"
                          value="2"
                          onChange={(e) => setTickBoxGrid(e.target.value)}
                        />
                        <input
                          className="my-3"
                          type="checkbox"
                          id="option1"
                          name="fav_language"
                          value="3"
                          onChange={(e) => setTickBoxGrid(e.target.value)}
                        />
                      </div>
                      <div className="row absolute top-[132px] sm:top-[128px] -left-10">
                        <label htmlFor="row">Row3</label>
                      </div>
                      <div className="col flex flex-1 flex-col">
                        <label htmlFor="column"> Column3</label>
                        <br />
                        <input
                          className="my-3"
                          type="checkbox"
                          id="option1"
                          name="fav_language"
                          value="1"
                          onChange={(e) => setTickBoxGrid(e.target.value)}
                        />
                        <input
                          className="my-3"
                          type="checkbox"
                          id="option1"
                          name="fav_language"
                          value="2"
                          onChange={(e) => setTickBoxGrid(e.target.value)}
                        />
                        <input
                          className="my-3"
                          type="checkbox"
                          id="option1"
                          name="fav_language"
                          value="3"
                          onChange={(e) => setTickBoxGrid(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn flex items-center justify-between mb-50">
            <button
              type="submit"
              className="bg-violet-800 px-6 py-2 text-white text-[.8rem] sm:text-[1rem] rounded-md hover:bg-violet-500"
            >
              Submit
            </button>
            <div className="h-[8px] sm:h-[12px] bg-green-600 w-[100px] sm:w-[250px] rounded-lg" />
            <p className="text-[14px] sm:text-base">Page 1 of 1</p>
            <p className="text-violet-900 hover:text-violet-500 text-[14px] sm:text-base">
              <button type="button" onClick={clearForm}>Clear form</button>
            </p>
          </div>
          <div className="info mb-12">
            <p className="text-gray-600 text-[13px] sm:text-[14px]">
              Never submit passwords through Google Forms.
            </p>
            <p className="text-gray-600 text-[13px] sm:text-[14px] text-center my-2">
              This content is neither created nor endorsed by Google.{" "}
              <span className="underline">Report Abuse </span>-{" "}
              <span className="underline">Terms of Service</span> -{" "}
              <span className="underline">Privacy Policy</span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
