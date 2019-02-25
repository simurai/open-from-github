'use babel';

import { CompositeDisposable } from 'atom';

export default {

  handleURI(parsedUri) {

    const url = parsedUri.query.url;

    // Guard for github.com URLs
    if ( url.startsWith('https://github.com/') ) {

      // Switch project
      const project = url.split('/')[4]; // get repo name
      const projectPath = atom.config.get('core.projectHome') + '/' + project;
      atom.project.setPaths([projectPath], {exact: true});

      // Open find in project
      const view = atom.views.getView(atom.workspace);
      atom.commands.dispatch(view, 'project-find:show');

    } else {
      console.log('[open-from-github] Note: It only works with GitHub URLs.');
    }


  }

};
