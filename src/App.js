import "./App.css";
import { useState } from "react";
import { useEffect } from "react";


const sampleBlogs = [
  {
    createdAt: "2022-06-30T04:03:07.069Z",
    author: "Marion Roberts DDS",
    text: "Vitae quaerat nostrum dolor. Eius non totam autem unde ea consequatur quia. Laborum exercitationem sed.\nQui quam corrupti voluptatem autem. Voluptatum in et voluptas quisquam id doloremque nostrum unde. Consequuntur ea qui.\nSed consequuntur voluptas nemo ea laborum neque distinctio quo iusto. Temporibus aut quisquam. Laboriosam fugit eum sint corporis sequi minus iste molestiae quos. Quae aut earum quasi facilis hic et.",
    title: "sapiente",
    id: "1",
  },
  {
    createdAt: "2022-06-30T04:16:20.950Z",
    author: "Dr. Martha Herman",
    text: "Et consequatur earum et in quam. Tenetur ipsam dolores. Eius aperiam est.\nRerum laborum ut. Accusantium amet qui impedit laudantium. Aut et minus perspiciatis voluptates. Mollitia modi maiores non. Qui animi assumenda distinctio repellendus reiciendis tenetur esse quia magnam. Quo natus minus sed.\nEa quod nulla hic est et libero enim et. Occaecati voluptas ut minus impedit aperiam. Dolore atque cumque ut accusamus enim. Dicta qui minima et doloremque quam veniam voluptatibus. Nihil repellat et. Laboriosam quia voluptatem.",
    title: "nemo",
    id: "2",
  },
  {
    createdAt: "2022-06-30T09:57:45.633Z",
    author: "Francis McDermott",
    text: "Consequatur nostrum adipisci doloribus commodi. Dolore enim minus. Assumenda sint molestiae. Voluptatem repellat ad. Quasi incidunt accusantium ipsum voluptate aut modi.\nSed id labore recusandae commodi. Ullam neque ab. At similique veritatis. Voluptas similique deserunt nihil praesentium qui. Dolore velit ea doloremque quae quo modi.\nOccaecati id nobis architecto ut beatae et. Consequuntur aut eveniet cum optio. Non dolores asperiores optio consequatur sequi.",
    title: "omnis",
    id: "3",
  },
  {
    createdAt: "2022-06-30T01:29:57.446Z",
    author: "Miss Rickey Schmidt",
    text: "In corrupti adipisci. Qui eaque voluptatem at. Libero et omnis ullam. Soluta quas provident iste autem quae saepe et dolor.\nDolores quos voluptate quibusdam qui harum inventore. Quae pariatur reprehenderit dignissimos non qui itaque veniam quod magni. Deserunt veritatis qui natus eligendi. Aut adipisci eum voluptatem libero similique. Aut delectus nam. Ullam dolor nostrum consectetur aut sit illum magni.\nCum nemo harum earum sed. Nobis et in cumque placeat. Odio alias sint ab. Ratione amet fuga vitae aut dolorum.",
    title: "expedita",
    id: "4",
  },
  {
    createdAt: "2022-06-29T19:17:08.325Z",
    author: "Marcella Jacobson",
    text: "Voluptatibus laboriosam culpa ut aut ea ipsum alias itaque. Placeat qui et. Quam ipsa non unde fugiat cupiditate dignissimos.\nUt ut rerum veniam sit deserunt. Molestiae ut quis molestiae quis autem aliquid. Non beatae sequi minus voluptatem enim accusantium quia dolorem.\nDolorum vel aperiam est pariatur id. Sunt et nam. Sit eligendi dolorem ullam dicta quo ipsa omnis. Assumenda accusantium tempora qui temporibus cum rerum error necessitatibus. Nisi consectetur fuga qui nisi eaque maxime quia pariatur.",
    title: "similique",
    id: "5",
  },
];

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT; //5
const App = () => {
  const [urlParamString, seturlParamString]= useState ("");
  const generateUrlParams = (limit, page, sortBy, order) => {
    let urlParams = " ";
    str.concat("?limit=4&page=3&sortBy=createdAt&order=asc") //For each of the four function parameters limit, page, sortBy and order
    seturlParamString = urlParamString; //Finally, call the setter function setUrlParamString with urlParams passed as an argument 
  }
  // useEffect(()=>{
  //   const fetchBlogs = async () => {
  //     const result = await fetch(
  //       `${urlEndpoint}/blogs` //8
  //     );
  //     const blogs = await result.json(); //9
  //     console.log(blogs)
  //     setBlogs(blogs);
  //      };
  //      fetchBlogs();
  // }); //6 Understand the effect of the empty array!
  useEffect(() => {
    const fetchBlogs = async () => {
      const result = await fetch(
        `${urlEndpoint}/blogs${urlParamString}`
      );
      const blogs = await result.json();
      console.log(blogs)
      setBlogs(blogs);
    };
    fetchBlogs();
  }, [urlParams]); //New item in the dependency array

  const [blogs, setBlogs] = useState([...sampleBlogs]);
  console.log(blogs);
	return (
		<div className="App-header">
    <BlogList blogs={blogs} />
		</div>
	);
}

const BlogListCard = (props) => {
  // console.log(props)
  const {blog} = props;
  return (
		<div>
    <h2>{blog.title}</h2> 
    <p>{blog.author}</p>
    <p>{blog.text}</p>
		</div>
  );
};
<OptionBar
	generateUrlParams={generateUrlParams}
/> //6 Review this
const BlogList = (props) => {
  const {blog} = props;
  // console.log(props)
  const blogs = props.blogs 
  console.log(blogs)
  return (
    <div>
    {blogs.map((blog, index) => {
	return <BlogListCard blog={blog} key={index} />;
})}    </div>
  );
};

function OptionBar(props) {
  useEffect(()=>{
    generateUrlParams(limit, page, sortBy, order)
  }, [limit, page, sortBy, order])
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("")
  const [order, setOrder] = useState("")
  return(
    <div>
<label>Limit:</label>
<input type="number" value={limit} onChange={(e)=>{
	setLimit(e.target.value)
}}/>
 <label>Page</label>
 <input type="number" value={page} onChange={(e)=>{
  setPage(e.target.value)
 }}/>
 <label>SortBy</label>
 <select name="field name" value={sortBy} onChange={(e)=>{// double check this line of code
  setSortBy(e.target.value)
  }}/>
 <option></option>
<option value="id">id</option>
<option value="title">title</option>
<option value="createdAt">createdAt</option>

<select name="field name" value={order} onChange={(e)=>{// double check this line of code
  setOrder(e.target.value)
  }}/>
   <option></option>
<option value="asc">id</option>
<option value="desc">title</option>
</div>
  );
};

export default App;