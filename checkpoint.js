((Problem 1))
public static void findDistinctElements(int [] setOne, int [] setTwo){

        System.out.println("Set 1: " + Arrays.toString(setOne) + ", Set 2: " + Arrays.toString(setTwo));
        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i <setOne.length ; i++) {
            int element = setOne[i];
            if(map.containsKey(element)) {
                int count = map.get(element);
                map.put(element, count+1);
            }else
                map.put(element, 1);
        }

        for (int i = 0; i <setTwo.length ; i++) {
            int element = setTwo[i];
            if(map.containsKey(element)) {
                int count = map.get(element);
                map.put(element, count+1);
            }else
                map.put(element, 1);
        }

        //get sum of distinct elements
        int sum = 0;
        Set<Integer> set = map.keySet();
        Iterator<Integer> iterator = set.iterator();
        while (iterator.hasNext()){
            int key = iterator.next();
            if(map.get(key)==1)
                sum += key;
        }

        System.out.println("Distinct Elements Sum : " + sum);
    }

    public static void main(String[] args) {
        int [] setOne = {3, 1, 7, 9};
        int [] setTwo = {2, 4, 1, 9, 3};
        findDistinctElements(setOne, setTwo);
    }
///////////////
((Problem 2))
let vectors = [
    [7, 1, 1],
    [6, 0, 2],
    [5, 7, 0],
    [3, 1, 2],
    [2, 3, 8],
    [0, 0, 0]
]

function dotProduct(vector1, vector2) {
    let result = 0;
    for (let i = 0; i < vector1.length; i++) {
        result += vector1[i] * vector2[i]
    }
    return result
}

for (let i = 0; i < vectors.length; i++) {
    for (let j = i + 1; j < vectors.length; j++) {
        if (dotProduct(vectors[i], vectors[j]) === 0) {
            console.log(${vectors[i]} and ${vectors[j]} are orthogonal )
        }
    }
