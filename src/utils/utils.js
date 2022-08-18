const paginate = (followers) => {
    const itemsPerPage = 10;
    const numberOfPages = Math.ceil(followers.length / itemsPerPage);

    const newFollowers = Array.from({length: numberOfPages}, (_, index) => {
        const start = index * itemsPerPage;
        // console.log(index)
        // console.log(start)
        return followers.slice(start, start + itemsPerPage);
    })

    return newFollowers;
    // console.log(newFollowers)
}

export default paginate;