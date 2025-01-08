import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodos, postTodo } from "../my-api";

export const Home = () => {
  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  // Mutations
  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (error) return "Error: " + error;
  console.log("queryClient:::::", queryClient.getQueryData(["todos"]));

  return (
    <div>
      {isLoading ? (
        "Loading....."
      ) : (
        <ul>
          {data?.map((todo) => (
            <div key={todo.id} className="row">
              <li key={todo.id}>{todo.title}</li>
              <button
                onClick={() => {
                  mutation.mutate({
                    id: Date.now(),
                    title: "Do Laundry",
                  });
                }}
              >
                Edit Todo 1
              </button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};
