

document.getElementById('gridView').addEventListener('change', function() {
    document.getElementById('image-grid').classList.remove('d-none');
    document.getElementById('image-list').classList.add('d-none');
});

document.getElementById('listView').addEventListener('change', function() {
    document.getElementById('image-grid').classList.add('d-none');
    document.getElementById('image-list').classList.remove('d-none');
});