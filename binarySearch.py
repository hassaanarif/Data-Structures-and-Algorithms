class BinarySearch:

    def binarySearchIteration(self, item, array):
        left = 0
        right = len(array) - 1
        array.sort()

        while left <= right:
            mid = (left + right) / 2
            if array[mid] == item:
                return mid
            if item > array[mid]:
                left = mid + 1
            else:
                right = mid - 1
        
        return "item not Found"

    def binarySearchRecurrsion(self, item, array):
        left = 0
        right = len(array) - 1
        array.sort()
        return self.binarySearchRecurrsionPrivate(item, array, left, right)

    def binarySearchRecurrsionPrivate(self, item, array, left, right):
        if right < left:
            return "item not found"
        mid = (left + right) / 2
        if array[mid] == item:
            return mid       
        if item > array[mid]:
            return self.binarySearchRecurrsionPrivate(item, array, mid + 1, right)
        else:
            return self.binarySearchRecurrsionPrivate(item, array, left, mid - 1)



obj = BinarySearch()

print(obj.binarySearchRecurrsion(1, [1,6,0,8,5,4]))


