import React from 'react';

export const Contact = () => {
    return (
        <div style={{padding:"7.5px 300px"}}>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" required/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="email" required/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Mensaje</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                <label for="exampleFormControlFile1">Add File</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
            </div>
                <div className="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Estoy seguro</label>
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
};