export default (source, map) => {
    var reg = new RegExp('\{\{ (.*) \}\}','gi');

    source = source.replace(reg, 
        function ($1) {
            return eval($1);
        }
    );

    return source;
};